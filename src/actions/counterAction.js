import {plus,minus} from '../slices/counterSlice';

export const increment = (dispatch) =>{
    dispatch(plus());
}

export const decrement = (dispatch) =>{
    dispatch(minus());
}
