import React from "react";
import { Carousel } from "react-bootstrap";

import Sitevisitvideo from "./Sitevisitvideo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Testimonialvideo from "./Testimonialvideo";
import Video from "./Video";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Whatsapp from "./Whatsapp";
import Projectgallary from "./Projectgallary";

import PopularProject from "./popularproject/PopularProject";

import Prelaunch from "./Prelaunch/Prelaunch";
import Prelaunching from "./prelaunch1/Prelaunching";
import Amenities from "./Amenities/Amenities";
import Abouthome from "./Abouthome";
import Chooseus from "./whychooseus/Chooseus";
import "./App.css";
import Sales from "./Salesfolder/Sales/Sales";

import ReactPlayer from "react-player";
import Testimagescarousel from "./Testimagescarousel";
import Phone from "./Phone";
import Slider from "react-slick";
import { VideoPlayer } from "./VideoPlayer";
import Projects from "./Projects/Properties";
import Menuall from "./Menuall";

// import Daisy1 from "./videos/Daisy.mp4";

export default function Home() {
  return (
    <>
      <div className="mainhome">
        {/* <VideoPlayer url={"https://www.youtube.com/watch?v=zG_Gs4ohaJg"} /> */}

        <video
          src="https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/Daisy%20Cover%20Video%2Fsurrounding-1_HvY8mSl8.mp4?alt=media&token=c48c2d7c-40ad-49a6-b08f-c071ea27d461"
          autoPlay
          loop
          muted
        />
      </div>
      {/* <Projects /> */}

      <div className="Hometext">
        <h1>
          Welcome to <br></br> Bhavishya Nirman Developers{" "}
        </h1>
        <h2>
          Offering 2BHK, 3BHK, 4BHK Flats <br></br>In Chattarpur
        </h2>
        <h3>
          Deals in all kinds of 2BHK, 3BHK, 4BHK Flats In <br></br>
          Chattarpur,South Delhi. Book your Dream Home With<br></br> 0%
          Brokerage
        </h3>
      </div>

      {/* <div className="DaisyT">
        <h1>Best Selling Project</h1>
        <Prelaunch />
      </div> */}
      <div className="PropertyLoc">
        <h1>
          Explore Our Properties<br></br>
          By Locations
        </h1>
      </div>
      <div className="Locationarea">
        <button className="btn1">mandi</button>
        <button className="btn1">mandi</button>
        <button className="btn1">mandi</button>
        <br></br>
        <button className="btn1">mandi</button>
        <button className="btn1">mandi</button>
      </div>
      <div className="vimeo-testimonials">
        <h1>Customers Testimonials</h1>
        <div className="vimeo-testings">
          <Testimonialvideo />
        </div>
      </div>
      <button>Explore More Videos </button>
      <div className="vimeo-testimonials">
        <h1 style={{ marginTop: "20px" }}>Pre Launch Offer (Book Now )</h1>
        <Prelaunching />
      </div>
      <div>
        <div className="Freesitevisit">
          <h1>Book your Free Site Visit</h1>
          <a href="tel:9899550700">
            <button>Call Now</button>
          </a>
        </div>
      </div>
      <div className="Popularall">
        <h1>Popular Projects</h1>
        <p>Offering affordable flats in South Delhi with the best amenities.</p>
        <PopularProject />
      </div>
      <div className="Popularall">
        <h1>Happy Clients</h1>
        <Testimagescarousel />
      </div>
      <div className="Popularall">
        <h1>Free Site Visit Journey</h1>
        <Sitevisitvideo />
      </div>

      <div className="Questionbook">
        <h1>
          Are You Looking For<br></br>
          Your Dream Home In Chattarpur?
        </h1>
        <a href="/contact-us">
          <button>SCHEDULE A MEETING</button>
        </a>
      </div>

      <div className="Popularall">
        <h1>Amenities We Offer</h1>
        <Amenities />
      </div>
      <div className="achmnt">
        <h1>Our Acheivements</h1>
        <div className="allcards">
          <h2>
            19+ YEARS OF <br></br>EXCELLENCE
          </h2>
          <br></br>
          <h2>
            1,800+ HAPPY <br></br>CUSTOMERS
          </h2>
          <br></br>
          <h2>100% SATISFACTORY</h2>
        </div>
      </div>
      <div className="Questionbook">
        <h1>Interested to know More?</h1>
        <h2>Give Us A Missed Call on</h2>
        <a href="tel:9899550700">
          <button btn btn-call>
            98995-50700
          </button>
        </a>
      </div>
      <div className="Popularall">
        <h1>
          Our Properties<br></br>
          Walkthrough Videos
        </h1>
        {/* <p>Watch complete videos on YouTube</p> */}
      </div>

      <div className="Walkaround">
        <Video />
      </div>
      <Abouthome />
      <div className="Chooseusnow">
        <h1>Why Choose Us ?</h1>
        <p>Bhavishya Nirman Developers</p>

        <Chooseus />
      </div>
      <div className="Calling">
        <a href="tel:9899550700">
          <button className="Requestcall">
            {" "}
            <h1>Click to Know More </h1>
          </button>
        </a>
      </div>
      <Sales />
      {/* <Menuall /> */}
    </>
  );
}
