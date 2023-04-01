import React from 'react'
import UserSidebar from '../../components/UserSidebar'
import UserDashMain from '../../components/UserDashMain'
import "./userDash.css"

const UserDashPage = () => {
  return (
    <div className='flex'>
    <UserSidebar/>
    <UserDashMain/>
    </div>
  )
}

export default UserDashPage