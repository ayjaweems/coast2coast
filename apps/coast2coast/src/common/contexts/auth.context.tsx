import React, { createContext, ReactNode, useContext, useState } from 'react'

export interface AuthContextValue {
  user?: User
  loginUser: (email: string, password: string) => void
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

interface Props {
  children?: ReactNode
}

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
}

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>()

  const loginUser = async (email: string, password: string) => {
    setUser(user)
  }

  return <AuthContext.Provider value={{ user, loginUser }}>{children}</AuthContext.Provider>
}

export const useAuthData = (): AuthContextValue => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthData must be used with a AuthProvider')
  }
  return context
}

export default AuthProvider
