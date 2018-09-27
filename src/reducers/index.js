import { combineReducers } from 'redux';
import { ADD_TASK } from '../actions';
import { actionCollections } from '../actions';

const task = (state = [], action) => {
  switch(action.type) {
    case actionCollections.ADD_TASK:
      return {
        ...state,
        task: action.task,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  task,
});

export default rootReducer;
