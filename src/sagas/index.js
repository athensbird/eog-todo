import { takeLatest, call, put, all } from 'redux-saga/effects';

export function* watcherSaga(){
  yield takeLatest("ADD_TASK", workerSaga);
}

export function* workerSaga(){
  console.log("workerSaga working...");
}

export default function* rootSaga(){
  yield all([
    watcherSaga()
  ]);
}
