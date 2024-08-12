import React from "react";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import NavBar from "./components/NavBar";
import HeroSection3 from "./components/HeroSection3";
import HeroSection4 from "./components/HeroSection4";
import HeroSection5 from "./components/HeroSection5";
function App() {
  return (
    <div className='mt-24 mb-12'>
      <NavBar />
      <HeroSection /> <HeroSection2 />
      <HeroSection3 />
      <HeroSection4 />
      <HeroSection5 />
    </div>
  );
}

export default App;
