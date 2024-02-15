import { useState } from 'react';
import CreateTodoFormView from './CreateTodoForm.view';
import { Todo } from '../Todo.type';
import { randomNumberHelper } from '@/helpers/randomNumberHelper';
import { RootState } from '@/init/store/store';
import { toast } from 'react-toastify';
import { createTodo } from '@/dataservices/api/todo';
import { createTodo as createTodoRedux } from '@/dataservices/slice/todosSlice';
import { useDispatch } from 'react-redux';

const CreateTodoForm = () => {
  const dispatch = useDispatch();

  const initialTodoForm: Todo = {
    id: randomNumberHelper(),
    title: '',
  };

  const [todoForm, setTodoForm] = useState(initialTodoForm);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoForm((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  }

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
    <CreateTodoFormView
      handleChange={handleChange}
      loading={loading}
      submitTodo={submitTodo}
      todoForm={todoForm}
    />
  );
};

export default CreateTodoForm;
