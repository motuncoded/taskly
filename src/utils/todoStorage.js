// src/utils/todoStorage.js
import localforage from "localforage";

const TODO_KEY = "taskly_todos";

export const getTodos = async () => {
  const todos = await localforage.getItem(TODO_KEY);
  return todos || [];
};

export const saveTodo = async (todo) => {
  const todos = await getTodos();
  todos.push(todo);
  await localforage.setItem(TODO_KEY, todos);
};

export const clearTodos = async () => {
  await localforage.removeItem(TODO_KEY);
};
