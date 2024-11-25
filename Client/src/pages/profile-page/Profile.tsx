import React from 'react'
import PageHeader from '../PageHeader'
import ProfileComp from '../../components/ProfileComp'


export default function Profile() {
  return (
    <div>
      <PageHeader title='Profile'/>
      <ProfileComp/>
    </div>
  )
}
