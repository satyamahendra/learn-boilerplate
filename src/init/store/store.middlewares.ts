import { todosApi } from '@/dataservices/api/todoApi';

const middlewares = [
  // add middleware
  todosApi.middleware,
];

export default middlewares;
