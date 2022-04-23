import {TActions, TUserList} from './types';

const initialState = {
  isLoading: false,
  error: null,
  users: null,
};
export default function reducer(
  state: TUserList = initialState,
  action: TActions,
) {
  switch (action.type) {
    case 'list/GET_USER_LIST':
      return {...state, users: {...state.users, isLoading: true}};
    case 'list/GET_USER_LIST_SUCCESS':
      return {
        ...state,
        users: {
          ...state.users,
          isLoading: false,
          users: action.payload,
        },
      };
    case 'list/GET_USER_LIST_ERROR':
      return {
        ...state,
        users: {
          ...state.users,
          isLoading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
}
