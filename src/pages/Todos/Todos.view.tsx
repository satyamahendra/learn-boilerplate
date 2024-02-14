import CreateTodoForm from './CreateTodoForm';
import EmptyMessage from './EmptyMessage';
import { TodoType } from './Todo.type';
import TodosList from './TodosList';

type TodosViewPropsType = {
  todos: TodoType[];
};

export default function TodosView({ todos }: TodosViewPropsType) {
  return (
    <main className="flex justify-center h-screen">
      <div className="w-full max-w-xl p-4 bg-gray-100 rounded-b-xl">
        <CreateTodoForm />

        {todos.length < 1 ? <EmptyMessage /> : <TodosList todos={todos} />}
      </div>
    </main>
  );
}
