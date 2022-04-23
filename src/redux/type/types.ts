import {rootReducer} from '../store';
import {TUserList} from '../User/types';

export type TRootReducer = {
  toDos: never;
  users: TUserList;
};
