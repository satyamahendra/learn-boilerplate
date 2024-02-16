import { Todo } from '../Todo.type';
import TodoItem from '../TodoItem';
import { TodosListViewProps } from './TodoList.type';

const TodoListView = ({ todos }: TodosListViewProps) => (
  <ul className="flex flex-col gap-2 mt-4">
    {todos?.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
  </ul>
);

export default TodoListView;
