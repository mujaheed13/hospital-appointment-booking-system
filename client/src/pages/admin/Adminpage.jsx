import React, { useState } from 'react'
import AdminLogin from '../../components/Adminlogin'
import AdminDashPage from '../dashboard/AdminDashPage'



const Adminpage = (props) => {
  return (
<<<<<<< HEAD
    <>
    
    {props.login ? <AdmDashboard/> : <AdminLogin />}
    </>
=======
    props.login ? <AdminDashPage/> : <AdminLogin />
>>>>>>> 6b84c3c560085aabf3c58a940fc4ea0e721cf49c
  )
}

export default Adminpage