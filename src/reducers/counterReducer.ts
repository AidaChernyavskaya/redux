import {CounterAction, CounterActionTypes, ICounterState} from "../types/counter";

const initialState: ICounterState = {
    counter: 0,
};

export const counterReducer = (state: ICounterState = initialState, action: CounterAction): ICounterState => {
    switch (action.type) {
        case CounterActionTypes.INCREMENT:
            return {...state, counter: state.counter + 1};
        case CounterActionTypes.DECREMENT:
            return {...state, counter: state.counter - 1};
        default:
            return state;
    }
};