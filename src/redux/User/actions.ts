import {TUserList} from './types';

const GET_USER_LIST = 'list/GET_USER_LIST' as const;
const GET_USER_LIST_SUCCESS = 'list/GET_USER_LIST_SUCCESS' as const;
const GET_USER_LIST_ERROR = 'list/GET_USER_LIST_ERROR' as const;

export const getUserList = () => ({
  type: GET_USER_LIST,
});
export const getUserListSuccess = ({payload}: {payload: TUserList}) => ({
  type: GET_USER_LIST_SUCCESS,
  payload,
});
export const getUserListError = ({payload}: {payload: any}) => ({
  type: GET_USER_LIST_ERROR,
  payload,
});
