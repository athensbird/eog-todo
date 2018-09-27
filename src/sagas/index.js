import { takeLatest, call, put, all } from 'redux-saga/effects';
import addTask from "../api/addTask";

export function* watchAddTask(){
  yield takeLatest("ADD_TASK", addTaskSaga);
}

export function* addTaskSaga(){
  console.log("addTaskSaga working...");
  try {
    const res = yield call(addTask);
  }
  catch (error) {
    console.log(error);
  }
}

export default function* rootSaga(){
  yield all([
    watchAddTask()
  ]);
}
