import { useState } from "react";

import "./App.css";
import Carousel from "./components/carousel";

import Footer from "./components/Footer";
import Midsection from "./components/Midsection";
import Navbar from "./components/Navbar";
import AllRoute from "./routes/Route";

function App() {
  return (
    <>
      <AllRoute />
    </>
  );
}

export default App;
