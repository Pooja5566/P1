import React from "react";

import "./Footer.css";
import Social1 from "../Social1";

import FAQ from "../FAQ/Faq";
import GoogleMap from "../googlemap/GoogleMap";
import Phone from "../Phone";
import Whatsapp from "../Whatsapp";

export default function Footer() {
  return (
    <>
      <Phone />
      <Whatsapp />
      <FAQ />
      <GoogleMap />
      <div className="Footerh">
        <div className="row">
          <div className="col-xs-6 col-md-4 col-lg-4">
            <div className="Footerabout">
              <img
                className="image"
                src="https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Fbn.3b598744.png?alt=media&token=b8ae751a-31bd-41ff-8736-89130bdb0f2a"
              />
              <h1>About Bhavishya Nirman Developers</h1>
              <p>
                Bhavishya Nirman Developers is one of the leading real estate
                companies in Chattarpur, South Delhi that offers 2 BHK, 3 BHK &
                4 BHK society flats, ready to move flats, loan and registry
                flats, builder floor in South Delhi without paying brokerage
                fees. Bhavishya Nirman, have been specializing in better home
                construction for over 18 years, and we believe that passion
                always triumphs over perfection. For all of our residential
                projects in South Delhi, we always focus on green construction,
                and fresh air concepts.
              </p>
            </div>
          </div>
          <div className="col-xs-6 col-md-4 col-lg-4">
            <div className="Footersocial">
              <Social1 />
            </div>
          </div>
          <div className="col-xs-6 col-md-4 col-lg-4">
            <div className="Footercontact">
              <h1>Feel free to Contact Us</h1>
              <p>
                <b>Call:</b> <a href="tel:9899550700">9899550700</a>
                <br></br>
                <b>Email us:</b>{" "}
                <a href="mailto:info@bhavishyanirman.com">
                  info@bhavishyanirman.com
                </a>
                <br></br>
                <b>Address:</b> Office No. 1, 4th Floor, Khasra 393/1 , Opp.
                Choudhary Dhaba, Main Market, Ghitorni, New Delhi , 110030
              </p>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <div className="Footerbottom1">
        <h1>©Copyright Bhavishya Nirman Developers 2023</h1>
      </div>
    </>
  );
}
