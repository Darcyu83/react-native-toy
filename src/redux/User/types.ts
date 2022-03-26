import {getUserList, getUserListError, getUserListSuccess} from './actions';

export interface TUserList {
  isLoading: boolean;
  error: any | null;
  users: TUser[] | null;
}

export interface TUser {
  id: number;
  text: string;
}

export type TActions =
  | ReturnType<typeof getUserList>
  | ReturnType<typeof getUserListSuccess>
  | ReturnType<typeof getUserListError>;
