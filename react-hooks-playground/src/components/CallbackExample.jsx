import React, { useState, useCallback, useEffect } from 'react'

/**
 * Demonstrates useCallback:
 * - returns a memoized function reference
 * - useful when passing callbacks to optimized child components
 */
function Child({ onAction }){
  useEffect(() => {
    // logs when child receives a new function reference
    // helps illustrate how useCallback stabilizes the prop identity
    console.log('Child mounted or onAction changed')
  }, [onAction])

  return (
    <div className="p-2 border rounded">
      <button onClick={onAction} className="px-3 py-1 bg-green-500 text-white rounded">Call parent action</button>
    </div>
  )
}

export default function CallbackExample(){
  const [count, setCount] = useState(0)

  // without useCallback this function would get a new identity every render
  const increment = useCallback(() => {
    setCount(c => c + 1)
  }, []) // no dependencies → stable identity

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-semibold">useCallback — Memoize function</h2>
      <p className="mt-2">Count: <strong>{count}</strong></p>
      <Child onAction={increment} />
    </div>
  )
}
