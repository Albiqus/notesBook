import { legacy_createStore, combineReducers } from "redux";
import { listReducer } from "./data-reducer";
import { modalReducer } from "./modal-reducer";



let reducers = combineReducers({
    data: listReducer,
    modal: modalReducer
})

let store = legacy_createStore(reducers)

window.store = store



export {store}