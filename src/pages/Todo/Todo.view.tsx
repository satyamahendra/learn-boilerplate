import CreateTodoForm from './CreateTodoForm';
import { TodoViewProps } from './Todo.type';
import TodosList from './TodoList';

const TodoView = ({ todos, isLoading, error, isSuccess }: TodoViewProps) => (
  <main className="flex justify-center h-screen">
    <div className="w-full max-w-xl p-4 bg-gray-100 rounded-b-xl">
      {/* create todoform hrerhehr */}
      <CreateTodoForm />

      {isLoading && <div>loading</div>}
      {error && <div>something went wrong</div>}

      {isSuccess && <TodosList todos={todos} />}
    </div>
  </main>
);

export default TodoView;
