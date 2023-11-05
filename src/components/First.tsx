import {memo} from 'react'
import { useAppDispatch } from '../redux/store';
import { toggleSlide } from '../redux/features/slideSlice';

const First = () => {
    const dispatch = useAppDispatch();
    return(
        <div>
            <img className='blob1' src="../../images/blobs.png" />
            <h1 className='h1-first'>Quizzical</h1>
            <h3 className='h3-first'>Press the button to start the quiz</h3>
            <button className='start-button' onClick={() => dispatch(toggleSlide())}>Start quiz</button>
            <img className='blob2' src="../../images/blobs2.png" />
        </div>
    )
}

export default memo(First)