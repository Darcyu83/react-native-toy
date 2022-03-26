import {getTodos, setTodos} from './actions';
import reducer from './reducer';

export interface T_TodosState {
  isLoading: boolean;
  toDos: T_Todos[];
}

export interface T_Todos {
  id: string;
  whatToDo: string;
  done: boolean;
}

export type T_Actions =
  | ReturnType<typeof getTodos>
  | ReturnType<typeof setTodos>;
