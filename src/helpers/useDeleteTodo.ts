import { deleteTodo } from '@/dataservices/api/todo';
import { deleteTodo as deleteTodoRedux } from '@/dataservices/slice/todosSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export function useDeleteTodo() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  async function deleteTodoAction(id: string) {
    setLoading(true);
    try {
      await deleteTodo(id);
      dispatch(deleteTodoRedux(id));
    } catch (error: any) {
      toast(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { loading, deleteTodoAction };
}
