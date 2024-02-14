import { TodoType } from './Todo.type';
import TodoItem from './TodoItem';

type TodosListPropsType = {
  todos: TodoType[];
};

export default function TodosList({ todos }: TodosListPropsType) {
  return (
    <ul className="mt-4 flex flex-col gap-2">
      {todos.map((todo: TodoType) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
