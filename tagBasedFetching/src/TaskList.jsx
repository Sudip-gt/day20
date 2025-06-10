import {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} from './features/apiSlice';
import React, { useState } from 'react';

const TaskList = () => {
  const { data: tasks, isLoading, isFetching } = useGetTasksQuery();
  const [addTask, { isLoading: isAdding }] = useAddTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const [newTitle, setNewTitle] = useState('');

  const handleAdd = async () => {
    if (!newTitle.trim()) return;
    await addTask({ title: newTitle, completed: false, userId: 1 });
    setNewTitle('');
  };

  const handleToggle = (task) => {
    updateTask({ ...task, completed: !task.completed });
  };

  const handleDelete = (id) => {
    deleteTask(id);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        🗂️ Task List{' '}
        {isFetching && (
          <span className="text-sm text-blue-600 animate-pulse">Refreshing...</span>
        )}
      </h2>

      <div className="flex gap-2 mb-6">
        <input
          className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New task title"
          disabled={isAdding}
        />
        <button
          className={`px-4 py-2 text-white rounded ${
            isAdding ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
          }`}
          onClick={handleAdd}
          disabled={isAdding}
        >
          {isAdding ? 'Adding...' : 'Add'}
        </button>
      </div>

      {isLoading ? (
        <p className="text-gray-600">Loading tasks...</p>
      ) : tasks?.length === 0 ? (
        <p className="text-gray-500 italic">No tasks found. Add one above!</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center p-2 border rounded hover:bg-gray-50 transition"
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggle(task)}
                  className="accent-green-600"
                />
                <span
                  className={`${
                    task.completed ? 'line-through text-gray-500' : 'text-gray-800'
                  }`}
                >
                  {task.title}
                </span>
              </label>
              <button
                onClick={() => handleDelete(task.id)}
                className="text-red-500 hover:text-red-700 text-lg font-semibold"
                title="Delete task"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
