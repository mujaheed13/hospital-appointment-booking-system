import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import AdminDashMain from '../../components/AdminDashMain'

const AdminDashPage = () => {
  return (
    <div className='flex'>
    <AdminSidebar/>
    <AdminDashMain/>
    </div>
  )
}

export default AdminDashPage