import { memo } from 'react';
import { CreateTodoFormViewProps } from './CreateTodoForm.type';

const CreateTodoFormView: React.FC<CreateTodoFormViewProps> = memo(
  ({ todoForm, handleChange, isLoading, createTodo }) => (
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
        disabled={!todoForm.title || isLoading}
        className="px-4 py-2 text-white duration-200 bg-green-300 disabled:bg-gray-300 rounded-xl hover:bg-green-400 disabled:hover:bg-gray-400 disabled:cursor-not-allowed"
        onClick={() => createTodo(todoForm)}
      >
        Add
      </button>
    </form>
  ),
);

export default CreateTodoFormView;
