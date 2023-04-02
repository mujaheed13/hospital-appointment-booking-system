import React, { useState } from 'react'
import AdminLogin from '../../components/Adminlogin'
import AdminDashPage from '../dashboard/AdminDashPage'



const Adminpage = (props) => {
  return (
    props.login ? <AdminDashPage/> : <AdminLogin />

  )
}

export default Adminpage