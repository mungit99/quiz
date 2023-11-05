import { useEffect, useState, useRef, memo } from "react"
import Question from './Question'
import { useAppDispatch, useAppSelector } from "../redux/store";
import { toggleSlide } from "../redux/features/slideSlice";

const API_URL = 'https://opentdb.com/api.php?amount=5';

interface IQuest{
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}


const Second = () => {
    const dispatch = useAppDispatch();
    const slide = useAppSelector(state => state.slide.slide);
    const [allQuestions, setAllQuestions] = useState<IQuest[]>([])
    const rating = useRef<number>(0)

    const incRate = () => {
        if(rating?.current?.valueOf !== null){
            rating.current = rating.current + 1;
        }
    }

    const decRate = () => {
        if(rating?.current?.valueOf !== null){
            rating.current = rating.current - 1;
        }
    }

    useEffect(() => {
        let mounted = true;
        const fetchQuestions = async () => {
            const response = await fetch(API_URL);
            const questions = await response.json();
            mounted && setAllQuestions(questions.results);  
        }
        
        fetchQuestions();
        return () => {mounted = false};
    }, [])

    const webquest = allQuestions.length > 0
    ? allQuestions.map((quest) => (
        <div className='quest'>
            <Question
            question={quest.question}
            correct={quest.correct_answer}
            incorrect={quest.incorrect_answers}
            incRate={incRate}
            decRate={decRate}
            />
        </div>
      ))
    : <h1 className='loading'>Loading...</h1>;

    return(
        <>
        <img className='blob1' src="../../images/blobs.png" />
        <div className='div-quest'>{webquest}</div>
        {slide === "second" ?
        allQuestions.length > 0 && <button className='check-button' onClick={() => dispatch(toggleSlide())}>
            Check answers
        </button> :
        <div className='third-slide'>
            <h2 className='h2-second'>
                {`You scored ${rating.current}/${allQuestions.length} correct answers`}
            </h2>
            <button className='play-again-button' onClick={() => dispatch(toggleSlide())}>Play again</button>
        </div>
        }
        <img className='blob2' src="../../images/blobs2.png" />
        </>
    )
}

export default memo(Second)