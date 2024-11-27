import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import NewUser from '../../Components/NewUser'

export default function AddNewUser() {
  return (
    <div>
      <PageHeader title='new user' subTitle='add new user'/>
      <NewUser/>
    </div>
  )
}
