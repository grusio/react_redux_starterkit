import { createSlice } from "redux-starter-kit";

const initialState = {
    number : 0,
    text : ''
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
            gtext : (state, action) => {
                console.log('payload ' , action.payload);
                state.text = action.payload;
            }
        }
    }
);

export const { plus,minus,gtext } = counterSlice.actions;
export default counterSlice.reducer;