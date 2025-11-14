import React, { createContext, useState } from 'react'

/**
 * Simple UserContext provider:
 * - demonstrates providing value via context and consuming with useContext
 */
export const UserContext = createContext({
  user: { name: 'Visitor' },
  setUser: () => {}
})

export function UserProvider({ children }){
  const [user, setUser] = useState({ name: 'Visitor' })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
