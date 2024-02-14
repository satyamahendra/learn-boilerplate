import { useState } from 'react';
import { RootState } from '@/init/store/store';
import { randomNumberHelper } from '@/helpers/randomNumberHelper';
import { TodoType } from './Todo.type';
import { createTodo } from '@/dataservices/api/todo';
import { createTodo as createTodoRedux } from '@/dataservices/slice/todosSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function CreateTodoForm() {
  const dispatch = useDispatch();

  // initial form
  const initialTodoForm: TodoType = {
    id: randomNumberHelper(),
    title: '',
  };

  // states
  const [todoForm, setTodoForm] = useState(initialTodoForm);
  const [loading, setLoading] = useState(false);

  // handle form change
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoForm((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  }

  // submit function
  async function submitTodo(e: React.FormEvent, todoData: RootState) {
    e.preventDefault();
    setLoading(true);
    try {
      await createTodo(todoData);
      dispatch(createTodoRedux(todoData));
      setTodoForm({ ...initialTodoForm, id: randomNumberHelper() });
    } catch (error: any) {
      toast(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="flex gap-4">
      <input
        name="title"
        id="title"
        type="text"
        value={todoForm.title}
        onChange={handleChange}
        placeholder="something to do ..."
        className="w-full px-4 py-2 rounded-xl"
      />
      <button
        disabled={!todoForm.title || loading}
        className="px-4 py-2 text-white duration-200 bg-green-300 disabled:bg-gray-300 rounded-xl hover:bg-green-400 disabled:hover:bg-gray-400 disabled:cursor-not-allowed"
        onClick={(e) => submitTodo(e, todoForm)}
      >
        Add
      </button>
    </form>
  );
}
