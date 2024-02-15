import { useDeleteTodo } from '@/helpers/useDeleteTodo';
import DeleteTodoButtonView from './DeleteTodoButton.view';
import { DeleteTodoButtonProps } from './DeleteTodoButton.type';

const DeleteTodoButton = ({ id }: DeleteTodoButtonProps) => {
  const { loading, deleteTodoAction } = useDeleteTodo();

  return (
    <DeleteTodoButtonView
      deleteTodoAction={deleteTodoAction}
      loading={loading}
      id={id}
    />
  );
};

export default DeleteTodoButton;
