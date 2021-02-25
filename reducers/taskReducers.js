import {ADD_NEW_TASK, TOGGLE_ONE_TASK} from '../actions/actionTypes';

const taskReducers = (task =[], action) => {
    switch(action.type) {
        case ADD_NEW_TASK:
            return [
                ...tasks,
                {
                    taskId:action.taskId,
                    taskName:action.taskName,
                    complete: false
                }
            ]

            case TOGGLE_ONE_TASK:
            return [
                ...tasks.map(task => (task.taskId === action.taskId) ? {...task, complete : !task.complete} : task)
                
            ]
        default:
            return task;
    }
}