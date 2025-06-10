import React, { useState } from 'react';
import {
  useGetUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation
} from '../services/apiSlice';

const Users = () => {
  const { data: users, isLoading } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (name.trim()) {
      addUser({ name });
      setName('');
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded mb-6">
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="border px-2 py-1 rounded w-full"
          placeholder="New user name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-1 rounded">
          Add
        </button>
      </div>
      {isLoading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <ul className="space-y-2">
          {users?.map((user) => (
            <li key={user.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
              <span>{user.name}</span>
              <button
                onClick={() => deleteUser(user.id)}
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

export default Users;
