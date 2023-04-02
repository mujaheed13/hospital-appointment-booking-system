import React from 'react'
import UserDashMain from "../../components/UserDashMain"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const UserDashboardMain = () => {
  return (
    <>
    {/* <UserSidebar> */}
    <Navbar/>
    <UserDashMain />
    <Footer/>
    </>
  )
}

export default UserDashboardMain