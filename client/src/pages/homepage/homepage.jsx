import React from 'react'
import Carousel from '../../components/carousel'
import Contact from '../../components/Contact'
import DoctorCard from '../../components/DoctorCard'
import Footer from '../../components/Footer'
import Midsection from '../../components/Midsection'
import Navbar from '../../components/Navbar'
import Statistics from '../../components/statistics'
import WithSpeechBubbles from '../../components/Testimonials'
import AppointmentHead from '../../components/AppointmentHead'

const homepage = () => {
  return (
    <>
    <Navbar/>
    <Carousel />
    <Midsection/>
    <AppointmentHead/>
    <DoctorCard/>
    <WithSpeechBubbles/>
    <Statistics/>
    <Contact/>
    <Footer/>
    </>
  );
};

export default homepage;
