import * as React from 'react'
import { useAuth, withAuth, withLoginRequired } from 'use-auth0-hooks'

type UseAuthResult = ReturnType<typeof useAuth>

export interface Props {
  children: (auth: UseAuthResult) => JSX.Element
}

const Protected: React.FC<Props> = ({ children }) => {
  const auth = useAuth()
  return children(auth)
}

// @ts-ignore
export default withLoginRequired(withAuth(Protected)) as React.ComponentType<
  Props
>
