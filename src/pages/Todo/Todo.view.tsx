import { memo } from 'react';
import CreateTodoForm from './CreateTodoForm';
import { TodoViewProps } from './Todo.type';
import TodoList from './TodoList';

// propsnya sama ga render ulang pake memo
const TodoView: React.FC<TodoViewProps> = memo(
  ({ todos, isLoading, error, isSuccess }) => (
    <main className="flex justify-center h-screen">
      <div className="w-full max-w-xl p-4 bg-gray-100 rounded-b-xl">
        <CreateTodoForm />

        {isLoading && <div className="w-full mt-24 text-center">loading</div>}

        {error && (
          <div className="w-full mt-24 text-center">something went wrong</div>
        )}

        {isSuccess && <TodoList todos={todos} />}
      </div>
    </main>
  ),
);

export default TodoView;
