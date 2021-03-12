import * as React from 'react'
import Profile from '../components/Profile/Profile'
import Protected from '../components/Protected/Protected'
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
