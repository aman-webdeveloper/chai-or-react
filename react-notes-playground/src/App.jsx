import React from 'react'
import PropsExample from './components/PropsExample'
import StateCounter from './components/StateCounter';
import ConditionalExample from './components/ConditionalExample'
import CompositionExample from './components/CompositionExample'

export default function App(){
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">React Notes Playground</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <PropsExample />
        <StateCounter />
        <ConditionalExample />
        <CompositionExample />

      </div>
    </div>
  )
}
