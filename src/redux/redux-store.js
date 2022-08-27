import { legacy_createStore, combineReducers } from "redux";
import { listReducer } from "./data-reducer";
import { modalsReducer } from "./modals-reducer";



let reducers = combineReducers({
    data: listReducer,
    modals: modalsReducer
})

let store = legacy_createStore(reducers)

window.store = store



export {store}