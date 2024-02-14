import { RootState } from '@/init/store/store';
import TodosView from './Todos.view';
import { useSelector } from 'react-redux';

import { useFetchTodos } from '@/helpers/useFetchTodos';

export default function Todos() {
  // custom hook
  const { loading, error } = useFetchTodos();

  const todos = useSelector((state: RootState) => state.todos.todos);

  return <TodosView todos={todos} loading={loading} error={error} />;
}
