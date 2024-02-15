export interface Todo {
  id: string;
  title: string;
}

export type TodoViewProps = {
  todos: Todo[];
  loading: boolean;
  error: any;
};

export interface TodoItemProps {
  todo: Todo;
}

export interface TodosListPropsType {
  todos: Todo[];
}
