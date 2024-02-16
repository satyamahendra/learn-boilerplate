import { useCreateTodoMutation } from '@/dataservices/api/todoApi';
import { Todo } from '../Todo.type';

export interface CreateTodoFormViewProps {
  todoForm: Todo;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  isLoading: boolean;
  createTodo: ReturnType<typeof useCreateTodoMutation>[0];
}
