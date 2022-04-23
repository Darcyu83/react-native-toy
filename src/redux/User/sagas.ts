import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_TODOS} from '../todo/actions';
import {getUserList, getUserListSuccess, GET_USER_LIST} from './actions';

function* getUserListSaga(action: ReturnType<typeof getUserList>) {
  yield put(getUserListSuccess([{id: 1, text: 'hi'}]));
}

export function* watchUserSaga() {
  yield takeEvery(GET_USER_LIST, getUserListSaga);
}
