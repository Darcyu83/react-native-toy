import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import toDosReducer from './todo/reducer';
import {watchTodos} from './todo/sagas';

export const rootReducer = combineReducers({
  toDos: toDosReducer,
});

export function* rootSaga() {
  yield all([watchTodos()]);
}

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);
