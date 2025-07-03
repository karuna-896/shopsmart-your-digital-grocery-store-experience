import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./About.css";

const About = () => {
  document.title = "About Us";
  
  return (
    <>
      <Header />
      <div className="about-section-container">
        <h1 className="Heading">
          About <span className="highlight">Us</span>
        </h1>
        <div className="about-message-box">
          <p>
            Welcome to <strong>ShopSmart</strong> – your one-stop digital grocery store!
            We’re dedicated to making grocery shopping fast, simple, and convenient.
            With a wide variety of fresh fruits, vegetables, dairy, and household essentials,
            ShopSmart brings everything you need right to your doorstep.
            We aim to save your time while ensuring quality and affordability.
            Enjoy a smooth online shopping experience anytime, anywhere.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
