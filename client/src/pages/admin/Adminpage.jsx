import React, { useState } from 'react'
import AdminLogin from '../../components/Adminlogin'
import AdmDashboard from '../../components/AdminDashMain'

const Adminpage = (props) => {
  return (
    <>
    
    {props.login ? <AdmDashboard/> : <AdminLogin />}
    </>
  )
}

export default Adminpage