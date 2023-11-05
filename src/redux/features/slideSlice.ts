import {createSlice} from "@reduxjs/toolkit"

interface SlideState{
    slide: string;
}

const initialState: SlideState = {
    slide: "first"
}

export const SlideSlice = createSlice({
    name: "slide",
    initialState,
 
    reducers:{
        toggleSlide: (state) => {
            switch (state.slide) {
                case "first":
                    return { ...state, slide: "second" };
                case "second":
                    return { ...state, slide: "third" };
                default:
                    return { ...state, slide: "first" };
            }
        }
    }
});

export default SlideSlice.reducer;
export const { toggleSlide } = SlideSlice.actions;