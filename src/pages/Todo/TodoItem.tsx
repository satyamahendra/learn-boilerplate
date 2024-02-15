import DeleteTodoButton from './DeleteTodoButton';
import { TodoItemProps } from './Todo.type';

const TodoItem = ({ todo }: TodoItemProps) => (
  <li className="flex items-center justify-between py-2 pl-4 pr-2 bg-white rounded-xl">
    {todo.title}
    <DeleteTodoButton id={todo.id} />
  </li>
);

export default TodoItem;
