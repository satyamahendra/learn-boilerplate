import { useDispatch } from 'react-redux';
import { deleteTodo } from '@/dataservices/slice/todosSlice';

export default function TodoItem({ todo }: any) {
  const dispatch = useDispatch();

  return (
    <li className="pl-4 pr-2 py-2 items-center bg-white rounded-xl flex justify-between">
      {todo.title}
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="bg-red-300 w-8 h-8 rounded-lg text-white font-bold hover:bg-red-400 duration-200"
      >
        x
      </button>
    </li>
  );
}
