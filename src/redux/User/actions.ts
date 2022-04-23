import {TUser, TUserList} from './types';

export const GET_USER_LIST = 'list/GET_USER_LIST' as const;
export const GET_USER_LIST_SUCCESS = 'list/GET_USER_LIST_SUCCESS' as const;
export const GET_USER_LIST_ERROR = 'list/GET_USER_LIST_ERROR' as const;

export const getUserList = (id?: string) => ({
  type: GET_USER_LIST,
  id,
});
export const getUserListSuccess = (payload: TUser[]) => ({
  type: GET_USER_LIST_SUCCESS,
  payload,
});
export const getUserListError = (payload: any) => ({
  type: GET_USER_LIST_ERROR,
  payload,
});
