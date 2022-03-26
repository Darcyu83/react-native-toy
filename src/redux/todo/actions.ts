import {T_Todos} from './types';

export const GET_TODOS = 'todos/GET_TODOS' as const;
export const GET_TODOS_SUCCESS = 'todos/GET_TODOS_SUCCESS' as const;
export const GET_TODOS_ERROR = 'todos/GET_TODOS_ERROR' as const;
export const SET_TODOS = 'todos/SET_TODOS' as const;

export const getTodos = () => ({type: GET_TODOS});
export const getTodosSuccess = () => ({type: GET_TODOS_SUCCESS});
export const getTodosError = () => ({type: GET_TODOS_ERROR});

export const setTodos = ({payload}: {payload: T_Todos}) => ({
  type: SET_TODOS,
  payload: payload,
});
