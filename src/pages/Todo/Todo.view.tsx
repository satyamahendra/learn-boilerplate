import CreateTodoForm from './CreateTodoForm';
import { TodoViewProps } from './Todo.type';
import TodosList from './TodoList';

const TodoView = ({ todos, loading, error }: TodoViewProps) => (
  <main className="flex justify-center h-screen">
    <div className="w-full max-w-xl p-4 bg-gray-100 rounded-b-xl">
      {/* create todoform hrerhehr */}
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

export default TodoView;
