import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import {thunk} from "redux-thunk";

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState') || '{}')
    : {};

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;