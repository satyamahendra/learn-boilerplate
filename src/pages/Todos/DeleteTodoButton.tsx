import { useDeleteTodo } from '@/helpers/useDeleteTodo';

type DeleteTodoButtonPropsType = {
  id: string;
};

export default function DeleteTodoButton({ id }: DeleteTodoButtonPropsType) {
  const { loading, deleteTodoAction } = useDeleteTodo();

  return (
    <button
      disabled={loading}
      onClick={() => deleteTodoAction(id)}
      className="w-8 h-8 font-bold text-white duration-200 bg-red-300 rounded-lg hover:bg-red-400"
    >
      x
    </button>
  );
}
