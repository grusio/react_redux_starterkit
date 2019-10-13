import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment,decrement} from "../../actions/counterAction";

const Counter = () => {
    const dispatch = useDispatch();
    const number = useSelector(state => state.counter.number);
    return (
        <div>
            <h2> redux-starter-kit : Counter </h2>
            <span>{number}</span>
            <button onClick={ ()=>{dispatch(increment) }}> + </button>
            <button onClick={ ()=>{dispatch(decrement)}}> - </button>
        </div>
    );
}

export default Counter;