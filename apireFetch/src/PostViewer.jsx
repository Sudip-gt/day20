
import { useGetPostQuery } from './features/apiSlice';

const PostViewer = () => {
  const {
    data,
    error,
    isLoading,
    refetch,
    isFetching,
  } = useGetPostQuery();

  return (
    <div className="p-4 border rounded max-w-xl mx-auto shadow">
      <h2 className="text-xl font-bold mb-2">Cached Post Demo</h2>

      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error fetching post</p>}

      {data && (
        <div>
          <h3 className="text-lg font-semibold">{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}

      <div className="mt-4 flex items-center space-x-2">
        <button
          onClick={refetch}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Manual Refetch
        </button>
        {isFetching && <span className="text-sm text-gray-500">Refreshing...</span>}
      </div>
    </div>
  );
};

export default PostViewer;
