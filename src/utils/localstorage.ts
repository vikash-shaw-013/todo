// utils/localStorage.ts
export const TODOS_STORAGE_KEY = 'react-todos';

import { Todo } from '../types/Todo';

export const loadTodosFromStorage = (): Todo[] => {
  try {
    const storedTodos = localStorage.getItem(TODOS_STORAGE_KEY);
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (error) {
    console.error('Error loading todos from localStorage:', error);
    return [];
  }
};

export const saveTodosToStorage = (todos: Todo[]): void => {
  try {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error('Error saving todos to localStorage:', error);
  }
};

export default {
  loadTodosFromStorage,
  saveTodosToStorage,
};