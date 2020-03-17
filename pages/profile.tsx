import * as React from 'react'
import Profile from '../src/components/Profile/Profile'
import Protected from '../src/components/Protected/Protected'
import Layout from './_layout'

export interface Props {}

const ProfilePage: React.FC<Props> = () => {
  return (
    <Layout>
      <Protected>{() => <Profile />}</Protected>
    </Layout>
  )
}

export default ProfilePage
