import { useEffect, useState } from 'react';
import CreateTodoFormView from './CreateTodoForm.view';
import { randomNumberHelper } from '@/helpers/randomNumberHelper';
import { useCreateTodoMutation } from '@/dataservices/api/todoApi';

const CreateTodoForm = () => {
  const initialTodoFormState = {
    id: '',
    title: '',
  };

  const [todoForm, setTodoForm] = useState(initialTodoFormState);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoForm({
      id: randomNumberHelper(),
      title: e.target.value,
    });
  }

  const [createTodo, { isLoading, isSuccess }] = useCreateTodoMutation();

  useEffect(() => {
    if (isSuccess) {
      setTodoForm(initialTodoFormState);
    }
  }, [isSuccess]);

  return (
    <CreateTodoFormView
      handleChange={handleChange}
      isLoading={isLoading}
      createTodo={createTodo}
      todoForm={todoForm}
    />
  );
};

export default CreateTodoForm;
