import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Copyright from "./components/Copyright";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Team />
      <Projects/>
      <Clients/>
      <Footer />
      <Copyright/>
    </div>
  );
}

export default App;