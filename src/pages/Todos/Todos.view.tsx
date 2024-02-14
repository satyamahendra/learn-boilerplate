import CreateTodoForm from './CreateTodoForm';
import { TodoType } from './Todo.type';
import TodosList from './TodosList';

type TodosViewPropsType = {
  todos: TodoType[];
  loading: boolean;
  error: any;
};

export default function TodosView({
  todos,
  loading,
  error,
}: TodosViewPropsType) {
  return (
    <main className="flex justify-center h-screen">
      <div className="w-full max-w-xl p-4 bg-gray-100 rounded-b-xl">
        <CreateTodoForm />

        {/* loading */}
        {loading && (
          <div className="mt-8 text-center text-gray-400">Loadig...</div>
        )}

        {/* error */}
        {error && <div className="mt-8 text-center text-gray-400">{error}</div>}

        {/* empty todos */}
        {todos.length < 1 && !error && !loading && (
          <div className="mt-8 text-center text-gray-400">
            Theres nothing here
          </div>
        )}

        {/* todos */}
        {todos.length > 0 && !error && !loading && <TodosList todos={todos} />}
      </div>
    </main>
  );
}
