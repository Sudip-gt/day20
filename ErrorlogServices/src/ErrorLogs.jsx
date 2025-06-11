import { useGetLogsQuery } from './services/errorLogApi';

export default function ErrorLogs() {
  const { data, error, isLoading, isFetching, refetch } = useGetLogsQuery();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Error Logs</h1>
      
      {isLoading && <p className="text-yellow-600">Loading logs...</p>}
      {error && <p className="text-red-600">Failed to fetch logs: {error.status}</p>}
      {data && (
        <ul className="space-y-2">
          {data.map((log) => (
            <li key={log.id} className="p-2 bg-gray-100 rounded">
              <strong>{log.title}</strong>
              <p>{log.body}</p>
            </li>
          ))}
        </ul>
      )}

      {isFetching && !isLoading && <p className="text-blue-600">Refreshing logs...</p>}

      <button onClick={refetch} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Refetch Now
      </button>
    </div>
  );
}
