import Answer from "./Answer";
import {useEffect, useState, memo, FC} from 'react'

 
interface IProps{
    question: string;
    correct: string;
    incorrect: string[];
    incRate: () => void;
    decRate: () => void;
}

const Question:FC<IProps> = ({question, correct, incorrect, incRate, decRate}) => {
    const [answer, setAnswer] = useState("")
    const [answers, setAnswers] = useState<string[]>([])

    useEffect(() => {
        const ans = [...incorrect, correct]
        ans.sort(() => Math.random() - 0.5)
        setAnswers(ans)
    }, [correct, incorrect])

    const handleAns = (s: string) => {  
        if(s === answer) return;
        if(s === correct) incRate();
        if(answer === correct) decRate();
        setAnswer(s)
    }
    
    const allAn = answers.map((an) => 
        <Answer answer={an} selected={an === answer} 
        handleAns={handleAns} correct={correct === an} />)

    return(
        <div className='question-comp'>
            <h2 className='h2-quest'>
                {<div dangerouslySetInnerHTML={{ __html: question }} />}
            </h2>
            <div className='button-div'>
                {allAn}
            </div>
        </div>
    )
}

export default memo(Question)