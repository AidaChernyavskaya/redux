import {ITodoState, TodoAction, TodoActionTypes} from "../types/todo";

const initialTasks: ITodoState = {
    tasks: []
};

export const todoReducer = (state: ITodoState = initialTasks, action: TodoAction): ITodoState => {
    switch (action.type) {
        case TodoActionTypes.ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload]}
        case TodoActionTypes.REMOVE_TASK:
            return {...state, tasks: state.tasks.filter(task => task.id !== Number(action.payload))}
        case TodoActionTypes.TOGGLE_TASK:
            return {...state, tasks:
                    state.tasks.map((task) =>
                        task.id === Number(action.payload) ? {...task, isDone: !task.isDone} : task
                    )
            }
        default:
            return state;
    }
};