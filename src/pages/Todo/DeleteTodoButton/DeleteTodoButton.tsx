import DeleteTodoButtonView from './DeleteTodoButton.view';
import { DeleteTodoButtonProps } from './DeleteTodoButton.type';
import { useDeleteTodoMutation } from '@/dataservices/api/todoApi';

const DeleteTodoButton = ({ id }: DeleteTodoButtonProps) => {
  const [deleteTodo, { isLoading }] = useDeleteTodoMutation();

  return (
    <DeleteTodoButtonView
      deleteTodo={deleteTodo}
      isLoading={isLoading}
      id={id}
    />
  );
};

export default DeleteTodoButton;
