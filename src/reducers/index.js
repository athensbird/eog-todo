import { combineReducers } from 'redux';
import { ADD_TASK } from '../actions';
import { actionCollections } from '../actions';

const tasks = (state = [], action) => {
  switch(action.type) {
    case actionCollections.ADD_TASK:
      return [
        ...state,
        action.task,
      ];
    default:
      return state;
  }
}

const task = (state = {}, action) => {
  switch(action.type){
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  tasks,
  task
});

export default rootReducer;
