import * as React from 'react'
import { useAuth } from 'use-auth0-hooks'
import styled from '@emotion/styled'

export interface Props {}

const Profile: React.FC<Props> = () => {
  const auth = useAuth()
  const logOut = React.useCallback(() => auth.logout({ returnTo: '' }), [
    auth.logout,
  ])

  return auth.isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <section>
      {auth.user.hasOwnProperty('picture') && (
        <Avatar src={auth.user.picture} alt="avatar" width={100} height={100} />
      )}

      {auth.isAuthenticated ? (
        <button onClick={logOut}>Log out</button>
      ) : (
        <button onClick={auth.login}>Log in</button>
      )}
    </section>
  )
}

export default Profile

const Avatar = styled.img`
  border-radius: 200px;
`
