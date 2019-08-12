import {createStore} from 'redux';
import reduce from "./reducer"
const initialState = {
    count:10}
const state=createStore(()=>{},initialState);
export default state;