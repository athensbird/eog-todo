import { combineReducers } from 'redux';
import { actionCollections } from '../actions';

const tasks = (state = {data: [], loading: false }, action) => {
  switch (action.type) {
    case actionCollections.ADD_TASK:
      return {
        ...state,
        data: [],
        loading: true,
      };
    case actionCollections.LOAD_TASKS:
      return {
        ...state,
        data: action.tasks,
        loading: false,
      };
    default:
      return state;
  }
}

const task = (state = { loading: false }, action) => {
  switch (action.type){
    case actionCollections.LOAD_TASK:
      return {
        ...action.task,
        loading: false,
      };
    case actionCollections.GET_TASK:
      return {
        ...state,
        loading: true,
      };
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
