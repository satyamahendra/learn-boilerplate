import DeleteTodoButton from '../DeleteTodoButton';
import { TodoItemViewProps } from './TodoItem.type';

const TodoItemView = ({ todo }: TodoItemViewProps) => (
  <li className="flex items-center justify-between py-2 pl-4 pr-2 bg-white rounded-xl">
    {todo.title}
    <DeleteTodoButton id={todo.id} />
  </li>
);

export default TodoItemView;
