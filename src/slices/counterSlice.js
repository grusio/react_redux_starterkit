import { createSlice } from "redux-starter-kit";

const initialState = {
    number : 0
}

const counterSlice = createSlice(
    {
        slice : 'counter',
        initialState,
        reducers : {
            plus : (state) => {
                state.number=state.number+1;
            },
            minus : (state) => {
                state.number-=1;
            },
        }
    }
);

export const { plus,minus } = counterSlice.actions;
export default counterSlice.reducer;