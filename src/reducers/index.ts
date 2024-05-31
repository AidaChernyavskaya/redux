import {combineReducers, PayloadAction} from "@reduxjs/toolkit";

export interface ICounterState {
    counter: number;
}

const initialState: ICounterState = {
    counter: 0,
};

const counterReducer = (state: ICounterState = initialState, action: PayloadAction<number>): ICounterState => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        case 'DECREMENT':
            return {...state, counter: state.counter - 1};
        default:
            return state;
    }
};

export interface ITodoState {
    tasks: ITask[];
}

export interface ITask {
    title: string;
    isDone: boolean;
    id: number;
}

const initialTasks: ITodoState = {
    tasks: []
};

const todoReducer = (state: ITodoState = initialTasks, action: PayloadAction<ITask>) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {...state, tasks: [...state.tasks, action.payload]}
        case 'REMOVE_TASK':
            return {...state, tasks: state.tasks.filter(task => task.id !== Number(action.payload))}
        case 'TOGGLE_TASK':
            return {...state, tasks:
                state.tasks.map((task) =>
                    task.id === Number(action.payload) ? {...task, isDone: !task.isDone} : task
                )
            }
        default:
            return state;
    }
};

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IPostsState {
    posts: IPost[];
    error: null | string;
    loading: boolean;
    page: number;
    limit: number;
}

const initialPosts: IPostsState = {
    posts: [],
    error: null,
    loading: false,
    page: 1,
    limit: 10,
}

const postsReducer = (state: IPostsState = initialPosts, action: PayloadAction) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return {...state, loading: true};
        case 'FETCH_POSTS_SUCCESS':
            return {...state, loading: false, posts: action.payload};
        case 'FETCH_POSTS_ERROR':
            return {...state, loading: false, error: action.payload};
        case 'SET_POSTS_PAGE':
            return {...state, page: action.payload};
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    posts: postsReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
