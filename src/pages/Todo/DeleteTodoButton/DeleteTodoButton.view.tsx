import { DeleteTodoButtonViewProps } from './DeleteTodoButton.type';

const DeleteTodoButtonView = ({
  id,
  isLoading,
  deleteTodo,
}: DeleteTodoButtonViewProps) => (
  <button
    disabled={isLoading}
    onClick={() => deleteTodo(id)}
    className="w-8 h-8 font-bold text-white duration-200 bg-red-300 rounded-lg hover:bg-red-400"
  >
    x
  </button>
);

export default DeleteTodoButtonView;
