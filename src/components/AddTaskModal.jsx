import { useState } from "react";
import localforage from "localforage";
import { useNavigate } from "@tanstack/react-router";
import TodoList from "../routes/TodoList";

function AddTaskModal({ closeTaskModal }) {
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const saveTodo = async (todo) => {
    try {
      const existing = (await localforage.getItem("taskly_todos")) || [];
      const updated = [...existing, todo];
      await localforage.setItem("taskly_todos", updated);
      console.log("Todo saved:", todo);
    } catch (error) {
      console.error("Error saving todo:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    await saveTodo(newTodo);

    setTitle("");

    closeTaskModal();
    navigate({ to: "/todolist" });
  };

  return (
    <section className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#f2f3f4] p-6 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">New Task</h2>
          <button
            onClick={closeTaskModal}
            type="button"
            className="text-gray-500 hover:text-gray-700 text-[20px]"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            className="w-full border-2 border-gray-300 text-black rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
          >
            Add Task
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddTaskModal;
