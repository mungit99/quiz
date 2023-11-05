import {memo, FC} from 'react'
import { useAppSelector } from '../redux/store';

interface IProps{
    answer: string;
    selected: boolean;
    handleAns: (str: string) => void;
    correct: boolean;
}
const Answer:FC<IProps> = ({answer, selected, handleAns, correct}) => {
    const slide = useAppSelector(state => state.slide.slide);
    let ans = "non-selected";
    if(slide === "third"){
        if(correct) ans = "right"
        else if(selected) ans = "wrong"
    }else{
        ans = selected ? "selected" : "non-selected"
    }
    return(
        <>
            <button 
            className={ans}
            disabled={slide === "third"}
            onClick={() => handleAns(answer)}>
                {<div dangerouslySetInnerHTML={{ __html: answer }} />}
                
            </button>
        </>
    )
}

export default memo(Answer)