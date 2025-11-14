import React, { useState, useMemo } from 'react'

/**
 * Demonstrates useMemo:
 * - memoizes the result of an expensive calculation
 * - avoids re-computing unless dependencies change
 */

// an intentionally expensive function (synchronous)
function expensiveFib(n){
  // naive fibonacci — expensive for larger n
  if(n <= 1) return n
  return expensiveFib(n-1) + expensiveFib(n-2)
}

export default function MemoExample(){
  const [num, setNum] = useState(20) // input to expensive calculation
  const [dummy, setDummy] = useState(false)

  // useMemo will only recompute when `num` changes
  const fib = useMemo(() => {
    return expensiveFib(num)
  }, [num])

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-semibold">useMemo — Optimize expensive calculation</h2>
      <p className="mt-2 text-sm">Input (n):</p>
      <input type="number" value={num} onChange={e => setNum(Number(e.target.value))} className="mt-1 p-2 border rounded w-full" />
      <p className="mt-2">Fib({num}) = <strong>{fib}</strong></p>
      <p className="mt-2 text-sm text-gray-600">Toggle below to show memo prevents unnecessary recalculation.</p>
      <button onClick={() => setDummy(d => !d)} className="mt-2 px-3 py-1 bg-gray-200 rounded">Toggle (no re-calc)</button>
    </div>
  )
}
