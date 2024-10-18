import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="what we offer" title="our program" />
        <Programs />
        <About />
        <Title title="Campus photos" subTitle="gallery" />
        <Campus />
        <Title title="What Student Says" subTitle="TESTIMONIALS" />
        <Testimonials />
        <Title title="Get in touch" subTitle="Contact Us" />
      </div>
    </div>
  );
};

export default App;
