import React, { useState } from 'react'

export default function ConditionalExample(){
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-semibold">Conditional Rendering</h2>
      <div className="mt-2">
        {isLoggedIn ? <p>Welcome back, Aman! ✅</p> : <p>Please log in. ❌</p>}
      </div>
      <div className="mt-3">
        <button onClick={() => setIsLoggedIn(v => !v)} className="px-3 py-1 bg-indigo-500 text-white rounded">
          Toggle Login
        </button>
      </div>
    </div>
  )
}
