import {combineReducers} from 'redux-starter-kit'
import counter from "../slices/counterSlice";

const reducers = combineReducers({
    counter,
});


export default reducers

