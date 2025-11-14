import React from 'react'
import useFetch from '../hooks/useFetch'

/**
 * Demonstrates a custom hook (useFetch)
 * - encapsulates fetch logic and returns { data, loading, error }
 */
export default function CustomHookExample(){
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1')

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-semibold">Custom Hook — useFetch</h2>
      {loading && <p className="mt-2">Loading...</p>}
      {error && <p className="mt-2 text-red-500">Error: {error.message}</p>}
      {data && (
        <div className="mt-2">
          <pre className="text-sm bg-gray-100 p-2 rounded">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
