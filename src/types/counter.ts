export interface ICounterState {
    counter: number;
}

export enum CounterActionTypes {
    INCREMENT= 'INCREMENT',
    DECREMENT = 'DECREMENT'
}

interface IncrementAction {
    type: CounterActionTypes.INCREMENT;
    payload: number;
}

interface DecrementAction {
    type: CounterActionTypes.DECREMENT;
    payload: number;
}

export type CounterAction = IncrementAction | DecrementAction;
