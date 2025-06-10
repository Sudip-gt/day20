import React, { useState } from 'react';
import {
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation
} from '../services/apiSlice';

const Posts = () => {
  const { data: posts, isLoading } = useGetPostsQuery();
  const [addPost] = useAddPostMutation();
  const [deletePost] = useDeletePostMutation();
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      addPost({ title });
      setTitle('');
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded mb-6">
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="border px-2 py-1 rounded w-full"
          placeholder="New post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-1 rounded">
          Add
        </button>
      </div>
      {isLoading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <ul className="space-y-2">
          {posts?.slice(0, 10).map((post) => (
            <li key={post.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
              <span>{post.title}</span>
              <button
                onClick={() => deletePost(post.id)}
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

export default Posts;
