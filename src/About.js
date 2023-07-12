import React from "react";
import Social2 from "./Social2";
import Achievements from "./Achievements";

import Hero from "./Hero section/Hero";

import Tabs from "./Tabs.js";
import "./App.css";

export default function About() {
  return (
    <>
      <Hero
        cName="hero"
        heroImage="https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2FAbout%20Cover%20Image.jpg?alt=media&token=4b80a250-15fa-4f44-a49a-51bb741cd5a1"
        title="About Us"
        description="2 BHK, 3 BHK ,4 BHK Loan and Registry Flats in Chattarpur, South Delhi"
        buttontext="Visit Properties"
        url="/projects"
        btnClass="show"
      />

      <div className="Popularall">
        <h1>
          <b>Welcome to Bhavishya Nirman Developers</b>
        </h1>

        <br></br>
      </div>
      <div className="about-content">
        <h3> About Us</h3>
        <p>
          Bhavishya Nirman Developers is one of the leading real estate
          companies in Chattarpur, South Delhi that offers 2 BHK, 3 BHK & 4 BHK
          society flats, ready to move flats, loan and registry flats, builder
          floor in South Delhi without paying brokerage fees. Bhavishya Nirman,
          have been specializing in better home construction for over 18 years,
          and we believe that passion always triumphs over perfection. For all
          of our residential projects in South Delhi, we always focus on green
          construction, and fresh air concepts.
        </p>
      </div>

      {/* <Tabs /> */}
      <div className="buttonabout">
        <a href="/projects">
          <button className="btn1">Visit Properties</button>
        </a>
      </div>

      <Social2 />
      <div className="Ceopart">
        <div className="row ">
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="ceofounder">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2FAkash.87fed70b.png?alt=media&token=7aaec5df-c9b0-438f-9df5-e3841f075bda"
                alt="CEO"
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="ceofounder1">
              <h1>CEO/FOUNDER</h1>
              <p>
                Bhavishya Nirman Developers was founded and is led by Akash
                Kumar Baisoya, a well-known business leader and entrepreneur,
                who started his career in real estate business since early
                twenties. Now he has a vision to build affordable homes with the
                best facilities and luxury living without any brokerage fees to
                fulfill the dreams of Indian families. As a founder and CEO, he
                has been working with his zeal, zest and determination to propel
                Bhvaishya Nirman to new heights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
