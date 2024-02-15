import { TodoType } from './Todo.type';
import TodoItem from './TodoItem';

type TodosListPropsType = {
  todos: TodoType[];
};

const TodoList = ({ todos }: TodosListPropsType) => (
  <ul className="flex flex-col gap-2 mt-4">
    {todos.map((todo: TodoType) => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </ul>
);

export default TodoList;
