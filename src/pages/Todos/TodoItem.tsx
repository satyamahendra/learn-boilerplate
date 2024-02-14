import DeleteTodoButton from './DeleteTodoButton';

export default function TodoItem({ todo }: any) {
  return (
    <li className="flex items-center justify-between py-2 pl-4 pr-2 bg-white rounded-xl">
      {todo.title}
      <DeleteTodoButton id={todo.id} />
    </li>
  );
}
