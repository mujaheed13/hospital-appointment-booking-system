import React from 'react'
import {Routes,Route,Link} from  "react-router-dom"
import NotFound from '../components/NotFound'
import About from '../pages/about/About' 
import Adminpage from '../pages/admin/Adminpage'
import Appointment from '../pages/appointment/Appointment'
import Doctor from '../pages/doctor/Doctor'
import Homepage from  "../pages/homepage/Homepage"
import Loginpage from '../pages/login/Loginpage'
import Service from '../pages/service/Service'
import SignupPage from "../pages/signup/SignupPage"
import UserDashPage from '../pages/dashboard/UserDashPage'

const AllRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/doctor" element={<Doctor/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/admin" element={<Adminpage/>}/>
        <Route path="/admin/dashboard" element={<Adminpage/>}/>
        <Route path="/dashboard" element={<UserDashPage/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};

export default AllRoute;