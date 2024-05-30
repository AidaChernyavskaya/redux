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
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
