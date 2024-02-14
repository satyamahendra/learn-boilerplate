import { combineReducers } from '@reduxjs/toolkit';
import todosReducer from '../../dataservices/slice/todosSlice';

const rootReducer = combineReducers({
  // add reducer
  todos: todosReducer,
});

export default rootReducer;
