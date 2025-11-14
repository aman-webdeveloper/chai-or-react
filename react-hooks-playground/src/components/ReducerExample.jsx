import React, { useReducer } from 'react'

/**
 * Demonstrates useReducer:
 * - an alternative to useState for complex state logic
 * - use a reducer + actions to update state predictably
 */
const initialState = { count: 0 }

function reducer(state, action){
  switch(action.type){
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return initialState
    case 'add':
      return { count: state.count + (action.payload || 0) }
    default:
      return state
  }
}

export default function ReducerExample(){
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-semibold">useReducer — Complex counter</h2>
      <p className="mt-2">Count: <strong>{state.count}</strong></p>
      <div className="mt-3 space-x-2">
        <button onClick={() => dispatch({ type: 'increment' })} className="px-3 py-1 bg-blue-500 text-white rounded">+1</button>
        <button onClick={() => dispatch({ type: 'decrement' })} className="px-3 py-1 bg-gray-200 rounded">-1</button>
        <button onClick={() => dispatch({ type: 'add', payload: 5 })} className="px-3 py-1 bg-green-500 text-white rounded">+5</button>
        <button onClick={() => dispatch({ type: 'reset' })} className="px-3 py-1 bg-red-400 text-white rounded">Reset</button>
      </div>
    </div>
  )
}
