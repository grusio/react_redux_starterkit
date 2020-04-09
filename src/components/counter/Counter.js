import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, texting} from "../../actions/counterAction";
import {debounce} from "lodash";

const Counter = () => {
    const [txt, setTxt] = useState('');
    const dispatch = useDispatch();
    const number = useSelector(state => state.counter.number);
    const gtext = useSelector(state => state.counter.text);

    console.log(gtext);

    const onChangeTxt = (e) => {
        setTxt(e.target.value);
        console.log(e.target.value);
    }

    const waiter = debounce(onChangeTxt,2000,{leading:true})

    const onChange = (e) =>{
        waiter(e);
    }

    return (
        <div>
            <h2> redux-starter-kit : Counter </h2>
            <span>{number}</span>
            <button onClick={ ()=>{dispatch(increment) }}> + </button>
            <button onClick={ ()=>{dispatch(decrement)}}> - </button>
            <button onClick={ ()=>{dispatch(texting(txt))}}> text </button>
            <input onChange={onChange}/>
        </div>

    );
}

export default Counter;