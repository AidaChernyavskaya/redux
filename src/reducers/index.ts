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

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
