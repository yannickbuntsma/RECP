import * as React from 'react'
import Profile from '../src/components/Profile/Profile'
import Protected from '../src/components/Protected/Protected'

export interface Props {}

const ProfilePage: React.FC<Props> = () => {
  return <Protected>{() => <Profile />}</Protected>
}

export default ProfilePage
