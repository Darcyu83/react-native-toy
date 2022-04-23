import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import toDosReducer from './todo/reducer';
import userReducer from './User/reducer';
import {watchTodos} from './todo/sagas';
// import logger from 'redux-logger';
import {watchUserSaga} from './User/sagas';

export const rootReducer = combineReducers({
  toDos: toDosReducer,
  users: userReducer,
});

export function* rootSaga() {
  yield all([watchTodos(), watchUserSaga()]);
}

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);
