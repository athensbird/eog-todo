import { takeLatest, call, put, all } from 'redux-saga/effects';
import addTask from "../api/addTask";
import completeTask from "../api/completeTask";
import deleteTask from "../api/deleteTask";
import getTasks from "../api/getTasks";
import updateTask from "../api/updateTask";
import { actionCollections } from "../actions";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* watchAddTask(){
  yield takeLatest(actionCollections.ADD_TASK, addTaskSaga);
}

export function* watchCompleteTask(){
  yield takeLatest(actionCollections.COMPLETE_TASK, completeTaskSaga);
}

export function* watchDeleteTask(){
  yield takeLatest(actionCollections.DELETE_TASK, deleteTaskSaga);
}

export function* watchGetTask(){
  yield takeLatest(actionCollections.GET_TASK, getTaskSaga);
}

export function* watchGetTasks(){
  yield takeLatest(actionCollections.GET_TASKS, getTasksSaga);
}

export function* watchUpdateTask(){
  yield takeLatest(actionCollections.UPDATE_TASK, updateTaskSaga);
}

export function* addTaskSaga(action){
  try {
    const res = yield call(addTask, action.title);
    yield call(loadTasksSaga, res);
    yield call(delay, 100);
    yield call(action.callback);
  }
  catch (error) {
    console.log(error);
  }
}

export function* completeTaskSaga(action){
  try {
    const res = yield call(completeTask, action.task);
    yield call(delay, 100);
    yield call(loadTasksSaga, res);
    yield call(delay, 100);
    if (action.callback) {
      yield call(action.callback);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* deleteTaskSaga(action){
  try {
    const res = yield call(deleteTask, action.task);
    yield call(delay, 100);
    yield call(loadTasksSaga, res);
    yield call(delay, 100);
    if (action.callback) {
      yield call(action.callback);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* getTaskSaga(action){
  try {
    const res = yield call(getTasks);
    yield call(delay, 100);
    const task = res.find(t => t.id === parseInt(action.id, 10));
    yield call(loadTaskSaga, task);
  } catch(error) {
    console.log(error);
  }
}

export function* getTasksSaga(){
  try {
    const res = yield call(getTasks);
    yield call(delay, 100);
    yield call(loadTasksSaga, res);
  }
  catch(error) {
    console.log(error);
  }
}

export function* updateTaskSaga(action){
  try {
    const res = yield call(updateTask, action.task);
    yield call(delay, 100);
    yield call(loadTasksSaga, res);
    yield call(action.callback);
  } catch(error) {
    console.log(error);
  }
}

export function* loadTaskSaga(task){
  yield put({
    type: actionCollections.LOAD_TASK,
    task,
  })
}

export function* loadTasksSaga(res){
  yield put({
    type: actionCollections.LOAD_TASKS,
    tasks: res,
  });
}

export default function* rootSaga(){
  yield all([
    watchAddTask(),
    watchCompleteTask(),
    watchDeleteTask(),
    watchGetTask(),
    watchGetTasks(),
    watchUpdateTask(),
  ]);
}
