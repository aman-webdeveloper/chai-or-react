import React from 'react'
import StateExample from './components/StateExample'
import EffectExample from './components/EffectExample'
import RefExample from './components/RefExample'
import MemoExample from './components/MemoExample'
import CallbackExample from './components/CallbackExample'
import ContextExample from './components/ContextExample'
import ReducerExample from './components/ReducerExample'
import CustomHookExample from './components/CustomHookExample'
import { UserProvider } from './context/UserContext'

export default function App(){
  return (
    <UserProvider>
      <div className="min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">React Hooks Playground</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <StateExample />
          <EffectExample />
          <RefExample />
          <MemoExample />
          <CallbackExample />
          <ContextExample />
          <ReducerExample />
          <CustomHookExample />
        </div>
      </div>
    </UserProvider>
  )
}
