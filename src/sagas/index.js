import { takeLatest, call, put, all } from 'redux-saga/effects';
import addTask from "../api/addTask";
import getTasks from "../api/getTasks";
import { API, postHeaders, request } from "../api/config";
import { actionCollections } from "../actions";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* watchAddTask(){
  yield takeLatest("ADD_TASK", addTaskSaga);
}

export function* watchGetTasks(){
  yield takeLatest("GET_TASKS", getTasksSaga);
}

export function* addTaskSaga(action){
  console.log("addTaskSaga working...");
  try {
    const res = yield call(addTask, action.title);
    yield put({
      type: actionCollections.LOAD_TASKS,
      tasks: res,
    });
    yield call(delay, 500);
    yield call(action.callback);
  }
  catch (error) {
    console.log(error);
  }
}

export function* getTasksSaga(){
  try{
    const res = yield call(getTasks);
    console.log(res);
    yield call(delay, 500);
    yield put({
      type: actionCollections.LOAD_TASKS,
      tasks: res,
    });
  }
  catch(error) {
    console.log(error);
  }
}

export function* loadTasksSaga(action){

}

export default function* rootSaga(){
  yield all([
    watchAddTask(),
    watchGetTasks(),
  ]);
}
