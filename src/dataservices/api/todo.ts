import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const todosApi = axios.create({
  baseURL: `${BASE_URL}/todos`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch all todos
export const getAllTodos = async () => {
  try {
    const response = await todosApi.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

// Create a new todo
export const createPost = async (todoData: any) => {
  try {
    const response = await todosApi.post('/', todoData);
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};

// Delete a todo by ID
export const deleteTodo = async (todoId: string) => {
  try {
    const response = await todosApi.delete(`/${todoId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting todo with ID ${todoId}:`, error);
    throw error;
  }
};
