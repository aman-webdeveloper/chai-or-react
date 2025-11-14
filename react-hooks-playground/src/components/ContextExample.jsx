import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

/**
 * Demonstrates useContext:
 * - consumes a context provided higher in the tree
 * - great for sharing global-ish data without prop drilling
 */
export default function ContextExample(){
  const { user, setUser } = useContext(UserContext)

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-semibold">useContext — User context</h2>
      <p className="mt-2">Current user: <strong>{user.name}</strong></p>
      <div className="mt-2">
        <button onClick={() => setUser({ name: 'Alice' })} className="px-3 py-1 bg-pink-500 text-white rounded mr-2">Set Alice</button>
        <button onClick={() => setUser({ name: 'Bob' })} className="px-3 py-1 bg-pink-200 rounded">Set Bob</button>
      </div>
    </div>
  )
}
