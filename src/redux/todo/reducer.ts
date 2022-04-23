import {T_Actions} from './types';

export const initialState = {
  isLoading: false,
  toDos: [],
};

export default function reducer(state = initialState, action: T_Actions) {
  switch (action.type) {
    case 'todos/GET_TODOS':
      return {...state, isLoading: true};
    case 'todos/SET_TODOS':
      return {...state, toDos: [...state.toDos, action.payload]};
    default:
      return {...state};
  }
}
