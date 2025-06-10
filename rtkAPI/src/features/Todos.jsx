import React, { useState } from 'react';
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation
} from '../services/apiSlice';

const Todos = () => {
  const { data: todos, isLoading } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      addTodo({ title, completed: false });
      setTitle('');
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded mb-6">
      <h2 className="text-xl font-bold mb-4">Todos</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="border px-2 py-1 rounded w-full"
          placeholder="New todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAdd} className="bg-purple-500 text-white px-4 py-1 rounded">
          Add
        </button>
      </div>
      {isLoading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <ul className="space-y-2">
          {todos?.slice(0, 10).map((todo) => (
            <li key={todo.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
              <span>
                {todo.title} {todo.completed ? '(Done)' : ''}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
