import { TodoListProps } from './TodoList.type';
import TodoListView from './TodoList.view';

const TodoList = ({ todos }: TodoListProps) => {
  return <TodoListView todos={todos} />;
};

export default TodoList;
