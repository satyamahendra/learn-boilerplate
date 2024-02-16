import { combineReducers } from '@reduxjs/toolkit';
import todosReducer from '../../dataservices/slice/todosSlice';
import { todosApi } from '@/dataservices/api/todoApi';

const rootReducer = combineReducers({
  // add reducer
  todos: todosReducer,
  [todosApi.reducerPath]: todosApi.reducer,
});

export default rootReducer;
