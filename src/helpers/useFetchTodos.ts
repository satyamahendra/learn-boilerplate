import { getAllTodos } from '@/dataservices/api/todo';
import { storeTodos } from '@/dataservices/slice/todosSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export function useFetchTodos() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetch() {
      setError(null);
      setLoading(true);
      try {
        const data = await getAllTodos();
        dispatch(storeTodos(data));
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetch();
  }, []);

  return { loading, error };
}
