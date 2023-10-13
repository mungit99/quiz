import { useEffect, useState, useRef } from "react"
import Question from './Question'

interface Quest{
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

interface Props{
    slide: string;
    onClick2: () => void;
    onClick3: () => void;
}

const Second = ({onClick2, onClick3, slide}: Props) => {
    const [allQuestions, setAllQuestions] = useState<Quest[]>([])
    const rating = useRef(0)

    function incRate() {
        rating.current = rating.current + 1;
    }

    function decRate() {
        rating.current = rating.current - 1;
    }


    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setAllQuestions(data.results))
    }, [])

    const webquest = allQuestions.length > 0
    ? allQuestions.map((quest) => (
        <div className='quest'>
            <Question
            slide={slide}
            question={quest.question}
            correct={quest.correct_answer}
            incorrect={quest.incorrect_answers}
            incRate={incRate}
            decRate={decRate}
            />
        </div>
      ))
    : <h2>Loading...</h2>;

    return(
        <>
        <img className='blob1' src="../../images/blobs.png" />
        <div className='div-quest'>{webquest}</div>
        {slide === "second" ?
        <button className='check-button' onClick={onClick2}>
            Check answers
        </button> :
        <div className='third-slide'>
        <h2 className='h2-second'>{`You scored ${rating.current}/${allQuestions.length} correct answers`}</h2>
        <button className='play-again-button' onClick={onClick3}>Play again</button>
        </div>
        }
        <img className='blob2' src="../../images/blobs2.png" />
        </>
    )
}

export default Second