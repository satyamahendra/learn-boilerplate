import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '@/pages/Todo/Todo.type';

type initialStateType = {
  todos: Todo[];
};

// GA KEPAKE TAPI BUAT REFERENSI REDUX2AN

const initialState: initialStateType = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // create todo
    createTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },

    // delete todo
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // set all fetched todos
    storeTodos: (state, action: PayloadAction<any>) => {
      state.todos = action.payload;
    },
  },
});

export const { createTodo, deleteTodo, storeTodos } = todosSlice.actions;
export default todosSlice.reducer;
