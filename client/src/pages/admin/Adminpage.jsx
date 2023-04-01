import React, { useState } from 'react'
import AdminLogin from '../../components/Adminlogin'
import AdmDashboard from '../../components/AdminDashMain'

const Adminpage = (props) => {
  return (
    <>
    <AdminLogin/>
    </>
    props.login ? <AdminDashPage/> : <AdminLogin />
  )
}

export default Adminpage