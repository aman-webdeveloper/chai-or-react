import React from 'react'

function Child({ name }) {
  return <p>Hello, <strong>{name}</strong>!</p>
}

export default function PropsExample(){
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-semibold">Props Example</h2>
      <p className="mt-2">Parent passes data to child:</p>
      <div className="mt-2">
        <Child name="Aman" />
      </div>
    </div>
  )
}
