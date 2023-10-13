
interface Props{
    answer: string;
    selected: boolean;
    handleAns: (s: string) => void;
    slide: string;
    correct: boolean;
}
const Answer = ({answer, selected, handleAns, slide, correct}: Props) => {
    let s = "non-selected";
    if(slide === "third"){
        if(correct) s = "right"
        else if(selected) s = "wrong"
    }else{
        s = selected ? "selected" : "non-selected"
    }
    return(
        <>
            <button 
            className={s}
            disabled={slide === "third"}
            onClick={() => handleAns(answer)}>
                {<div dangerouslySetInnerHTML={{ __html: answer }} />}
            </button>
        </>
    )
}

export default Answer