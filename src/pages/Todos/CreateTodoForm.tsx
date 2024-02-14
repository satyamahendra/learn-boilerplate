import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '@/dataservices/slice/todosSlice';
import { RootState } from '@/init/store/store';
import { randomNumberHelper } from '@/helpers/randomNumberHelper';
import { TodoType } from './Todo.type';

export default function CreateTodoForm() {
  const initialTodoForm: TodoType = {
    id: randomNumberHelper(),
    title: '',
  };

  const [todoForm, setTodoForm] = useState(initialTodoForm);
  const dispatch = useDispatch();

  function submitTodo(e: React.FormEvent, payload: RootState) {
    e.preventDefault();
    dispatch(createTodo(payload));
    setTodoForm({ ...initialTodoForm, id: randomNumberHelper() });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoForm((prev) => ({
      ...prev,
      title: e.target.value,
    }));
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
        disabled={!todoForm.title}
        className="text-white bg-green-300 disabled:bg-gray-300 px-4 py-2 rounded-xl hover:bg-green-400 duration-200 disabled:hover:bg-gray-400 disabled:cursor-not-allowed"
        onClick={(e) => submitTodo(e, todoForm)}
      >
        Add
      </button>
    </form>
  );
}
