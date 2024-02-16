import { useDeleteTodoMutation } from '@/dataservices/api/todoApi';

export interface DeleteTodoButtonViewProps {
  id: string;
  isLoading: boolean;
  deleteTodo: ReturnType<typeof useDeleteTodoMutation>[0];
}

export interface DeleteTodoButtonProps {
  id: string;
}
