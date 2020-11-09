import React, { Suspense } from 'react'

import './app.css'
import { useAuthData } from '../common/contexts/auth.context'

const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))
const AuthenticatedApp = React.lazy(() => import('./authenticated-app'))

export const App = () => {
  const { user } = useAuthData()

  return (
    <Suspense fallback={<div>Travelling from Coast 2 Coast...</div>}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  )
}
