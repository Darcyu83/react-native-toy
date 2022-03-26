import {put} from '@redux-saga/core/effects';
import takeEvery from 'redux-saga';
import {getTodos, GET_TODOS, setTodos, SET_TODOS} from './actions';

function* getTodosSaga(action: ReturnType<typeof getTodos>) {
  yield put(getTodos());
}

function* setTodosSaga(action: ReturnType<typeof setTodos>) {
  yield put(setTodos(action));
}

export function* watchTodos() {
  yield takeEvery(GET_TODOS, getTodosSaga);
  // yield takeEvery(SET_TODOS, setTodosSaga);
}
