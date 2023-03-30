import React from "react";
import Carousel from "../../components/carousel";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Midsection from "../../components/Midsection";
import Navbar from "../../components/Navbar";

const homepage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Midsection />
      <Contact />
      <Footer />
    </>
  );
};

export default homepage;
