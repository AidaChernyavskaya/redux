export interface ITodoState {
    tasks: ITask[];
}

export interface ITask {
    title: string;
    isDone: boolean;
    id: number;
}

export enum TodoActionTypes {
    ADD_TASK = 'ADD_TASK',
    REMOVE_TASK = 'REMOVE_TASK',
    TOGGLE_TASK = 'TOGGLE_TASK'
}

interface AddTaskAction {
    type: TodoActionTypes.ADD_TASK;
    payload: ITask;
}

interface RemoveTaskAction {
    type: TodoActionTypes.REMOVE_TASK;
    payload: number;
}

interface ToggleTaskAction {
    type: TodoActionTypes.TOGGLE_TASK;
    payload: number;
}

export type TodoAction = AddTaskAction | RemoveTaskAction | ToggleTaskAction;