import * as React from 'react'
import { useAuth } from 'use-auth0-hooks'


import { Button } from '../../elements'

export interface Props {}

const Profile: React.FC<Props> = () => {
  const auth = useAuth()
  const logOut = React.useCallback(() => auth.logout({ returnTo: '' }), [
    auth.logout,
  ])

  return auth.isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      {auth.user.hasOwnProperty('picture') && (
        <img src={auth.user.picture} alt="avatar" width={100} height={100} />
      )}

      {auth.isAuthenticated ? (
        <Button onClick={logOut}>Log out</Button>
      ) : (
        <Button onClick={auth.login}>Log in</Button>
      )}
    </div>
  )
}

export default Profile

// const Container = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 2rem;
// `

// const Avatar = styled.img`
//   border-radius: 200px;
// `
