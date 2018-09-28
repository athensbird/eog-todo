import { combineReducers } from 'redux';
import { ADD_TASK } from '../actions';
import { actionCollections } from '../actions';
import { taskList } from '../data/tasks';

const tasks = (state = [], action) => {
  switch (action.type) {
    case actionCollections.ADD_TASK:
      return state;
    case actionCollections.LOAD_TASKS:
      return action.tasks;
    default:
      return state;
  }
}

const task = (state = {}, action) => {
  switch (action.type){
    case actionCollections.LOAD_TASK:
      return action.task;
    case actionCollections.UPDATE_TASK:
      return action.task;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  task,
  tasks,
});

export default rootReducer;
