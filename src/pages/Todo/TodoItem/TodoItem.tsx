import { TodoItemProps } from '../Todo.type';
import TodoItemView from './TodoItem.view';

export const TodoItem = ({ todo }: TodoItemProps) => {
  return <TodoItemView todo={todo} />;
};
