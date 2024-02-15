import { CreateTodoFormViewProps } from './CreateTodoForm.type';

const CreateTodoFormView = ({
  todoForm,
  handleChange,
  loading,
  submitTodo,
}: CreateTodoFormViewProps) => (
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

export default CreateTodoFormView;
