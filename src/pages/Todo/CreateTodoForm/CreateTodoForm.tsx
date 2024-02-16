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

// const dispatch = useDispatch();

// const initialTodoForm: Todo = {
//   id: randomNumberHelper(),
//   title: '',
// };

// const [todoForm, setTodoForm] = useState(initialTodoForm);
// const [loading, setLoading] = useState(false);

// function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
//   setTodoForm((prev) => ({
//     ...prev,
//     title: e.target.value,
//   }));
// }

// async function submitTodo(e: React.FormEvent, todoData: RootState) {
//   e.preventDefault();
//   setLoading(true);
//   try {
//     await createTodo(todoData);
//     dispatch(createTodoRedux(todoData));
//     setTodoForm({ ...initialTodoForm, id: randomNumberHelper() });
//   } catch (error: any) {
//     toast(error.message);
//   } finally {
//     setLoading(false);
//   }
// }
