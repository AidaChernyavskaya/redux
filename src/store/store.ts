import {createStore} from "@reduxjs/toolkit";
import rootReducer from "../reducers";

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState') || '{}')
    : {};

const store = createStore(rootReducer, persistedState);

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;
// export type RootState = ReturnType<typeof store.getState>;