import { Todo, TodosListPropsType } from './Todo.type';
import TodoItem from './TodoItem';

const TodoList = ({ todos }: TodosListPropsType) => (
  <ul className="flex flex-col gap-2 mt-4">
    {todos?.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
  </ul>
);

export default TodoList;
