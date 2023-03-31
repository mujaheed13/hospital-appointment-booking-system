import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DoctorCard from "../../components/DoctorCard";
import LearnMore from "../../components/LearnMore";


const Doctor = () => {
  return (
    <>
      <Navbar />
      <LearnMore />
      <DoctorCard/>
      <Footer />
    </>
  );
};

export default Doctor;
