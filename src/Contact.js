import React from "react";
import "./App.css";
import Hero from "./Hero section/Hero";

export default function Contact() {
  return (
    <>
      <Hero
        cName="hero"
        heroImage="https://img.freepik.com/free-photo/closeup-business-woman-hand-typing-laptop-keyboard-with-m_1232-2746.jpg?w=826&t=st=1685127025~exp=1685127625~hmac=368571990c065d596154cb3da4788e6a5e5f3b4cfc619bed06a2a2d938f48bc0"
        title="Contact Us"
        description="Speak to Our Expert"
        buttontext="Call Now"
        url="tel:9899550700"
        btnClass="show"
      />
      {/* <div className="contact">
          <h1>Speak to Our Expert</h1>
          <p>Feel Free to Contact us</p>
      </div> */}
      <div className="c1">
        <h1>Contact Us</h1>
        <h2>Bhavishya Nirman Developers</h2>
      </div>

      <div className="fullcont">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="cont1">
              <b>Address:</b>Office No. 1, 4th Floor, Khasra no. 393/1 , Opp.
              Choudhary Dhaba, Main Market, Ghitorni, New Delhi , 110030
              <br></br>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="cont1">
              <b>Email:</b> info@bhavishyanirman.com<br></br>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="cont1">
              <b>Phone:</b> +91-9899550700
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
