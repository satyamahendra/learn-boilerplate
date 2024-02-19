// import { useDispatch } from 'react-redux';
import TodoView from './Todo.view';
// import {useCreateTodoMutation } from '@/dataservices/api/todoApi';
import { useGetTodosQuery } from '@/dataservices/api/todoApi';
// import { useCallback } from 'react';

const Todo = () => {
  // const dispatch = useDispatch()

  const { data: todos, isLoading, isSuccess, error } = useGetTodosQuery();

  // const handleTodo = useCallback(() => {
  //   dispatch(useCreateTodoMutation())
  // },[dispatch])

  // isloading di taruh disini
  // isSuccess ga perlu

  return (
    <TodoView
      todos={todos}
      isLoading={isLoading}
      error={error}
      isSuccess={isSuccess}
    />
  );
};

export default Todo;
