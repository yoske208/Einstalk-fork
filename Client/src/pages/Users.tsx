import React from 'react'
import PageHeader from './PageHeader'
import AddNewUser from './AddNewUser'
import { Link } from 'react-router-dom'

export default function Users() {
  return (
    <div>
      <PageHeader title='USERS' />
      <button><Link to={"/AddNewUser"}>new user</Link></button>
      
      
    </div>
  )
}
