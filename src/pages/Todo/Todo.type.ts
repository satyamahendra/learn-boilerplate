export interface Todo {
  id: string;
  title: string;
}

export type TodoViewProps = {
  todos: Todo[] | undefined;
  isLoading: boolean;
  error: any;
  isSuccess: boolean;
};

export interface TodoItemProps {
  todo: Todo;
}

export interface TodosListPropsType {
  todos: Todo[] | undefined;
}
