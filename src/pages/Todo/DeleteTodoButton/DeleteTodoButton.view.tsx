import { DeleteTodoButtonViewProps } from './DeleteTodoButton.type';

const DeleteTodoButtonView = ({
  id,
  loading,
  deleteTodoAction,
}: DeleteTodoButtonViewProps) => (
  <button
    disabled={loading}
    onClick={() => deleteTodoAction(id)}
    className="w-8 h-8 font-bold text-white duration-200 bg-red-300 rounded-lg hover:bg-red-400"
  >
    x
  </button>
);

export default DeleteTodoButtonView;
