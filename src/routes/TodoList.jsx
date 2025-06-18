// src/routes/TodoList.jsx
import React, { useEffect, useState } from "react";
import localforage from "localforage";
import { GoTrash } from "react-icons/go";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    const storedTodos = (await localforage.getItem("taskly_todos")) || [];
    setTodos(storedTodos);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <main className=" px-6 py-12 ">
      <h2 className="text-4xl font-bold mb-8 text-blue-400">My Todo List</h2>

      {todos.length === 0 ? (
        <p className="text-gray-500">You have no tasks yet.</p>
      ) : (
        <ul className=" flex items-center space-x-4 gap-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="border-l-4 p-4 flex space-x-4 bg-white shadow rounded-md"
              style={{
                borderColor: todo.status === "pending" ? "#facc15" : "#22c55e", // yellow or green
              }}
            >
              <div>
                <p className="text-xl font-bold text-gray-800">{todo.title}</p>
                <p className="text-sm text-gray-500">
                  Created at: {new Date(todo.createdAt).toLocaleString()}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="text-sm mt-2 inline-block px-2 py-1 rounded-full  text-gray-700"
                >
                  <GoTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default TodoList;
