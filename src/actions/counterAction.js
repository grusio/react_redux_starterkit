import {plus, minus, gtext} from '../slices/counterSlice';

export const increment = (dispatch) => {
    dispatch(plus());
}

export const decrement = (dispatch) => {
    dispatch(minus());
}

export const texting = (txt) => (dispatch) => {
    dispatch(gtext(txt));
}
