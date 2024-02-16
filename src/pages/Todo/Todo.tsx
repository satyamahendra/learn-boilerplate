import TodoView from './Todo.view';
import { useGetTodosQuery } from '@/dataservices/api/todoApi';

const Todo = () => {
  const { data: todos, isLoading, isSuccess, error } = useGetTodosQuery();

  return (
    <TodoView
      todos={todos}
      isLoading={isLoading}
      error={error}
      isSuccess={isSuccess}
    />
  );
};

export default Todo;
