import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import ProfileComp from '../../Components/ProfileComp'


export default function Profile() {
  return (
    <div>
      <PageHeader title='Profile'/>
      <ProfileComp/>
    </div>
  )
}
