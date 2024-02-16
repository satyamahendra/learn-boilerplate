import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export interface Todo {
  id: string;
  title: string;
}

export type TodoViewProps = {
  todos: Todo[] | undefined;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  isSuccess: boolean;
};

export interface TodoItemProps {
  todo: Todo;
}
