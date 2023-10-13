import Answer from "./Answer";
import {useEffect, useState} from 'react'

 
interface Props{
    question: string;
    correct: string;
    incorrect: string[];
    slide: string;
    incRate: () => void;
    decRate: () => void;
}

const Question = ({question, correct, incorrect, slide, incRate, decRate}: Props) => {
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
        handleAns={handleAns} slide={slide} correct={correct === an} />)

    return(
        <div className='question-comp'>
            <h2 className='h2-quest'>{<div dangerouslySetInnerHTML={{ __html: question }} />}</h2>
            <div className='button-div'>
                {allAn}
            </div>
        </div>
    )
}

export default Question