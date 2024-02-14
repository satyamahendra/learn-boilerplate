import { RootState } from '@/init/store/store';
import TodosView from './Todos.view';
import { useSelector } from 'react-redux';

export default function Todos() {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return <TodosView todos={todos} />;
}
