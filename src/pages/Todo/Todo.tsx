import { RootState } from '@/init/store/store';
import TodoView from './Todo.view';
import { useSelector } from 'react-redux';

import { useFetchTodos } from '@/helpers/useFetchTodos';

const Todo = () => {
  const { loading, error } = useFetchTodos();

  const todos = useSelector((state: RootState) => state.todos.todos);

  return <TodoView todos={todos} loading={loading} error={error} />;
};

export default Todo;
