import { legacy_createStore, combineReducers } from "redux";
import { listReducer } from "./data-reducer";



let reducers = combineReducers({
    data: listReducer,
})

let store = legacy_createStore(reducers)

window.store = store



export {store}