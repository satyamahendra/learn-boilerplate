import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TodoType } from '@/pages/Todos/Todo.type';

type initialStateType = {
  todos: TodoType[];
};

const initialState: initialStateType = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    storeTodos: (state, action: PayloadAction<any>) => {
      state.todos = action.payload;
    },
  },
});

export const { createTodo, deleteTodo, storeTodos } = todosSlice.actions;
export default todosSlice.reducer;
