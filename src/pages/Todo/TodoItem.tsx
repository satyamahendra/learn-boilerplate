import DeleteTodoButton from './DeleteTodoButton';
import { TodoType } from './Todo.type';

interface TodoItem {
  todo: TodoType;
}

const TodoItem = ({ todo }: TodoItem) => (
  <li className="flex items-center justify-between py-2 pl-4 pr-2 bg-white rounded-xl">
    {todo.title}
    <DeleteTodoButton id={todo.id} />
  </li>
);

export default TodoItem;
