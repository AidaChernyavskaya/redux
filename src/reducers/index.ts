import {combineReducers} from "@reduxjs/toolkit";
import {counterReducer} from "./counterReducer";
import {todoReducer} from "./todoReducer";
import {postsReducer} from "./postsReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    posts: postsReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
