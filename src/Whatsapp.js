import React from "react";
import "./App.css";
import ReactWhatsapp from "react-whatsapp";
import icon5 from "./icon/Whatsapp.png";

export default function Whatsapp() {
  return (
    <div>
      <ReactWhatsapp
        number="+91 9899550700 "
        // class="btn btn-outline-dark"
        massage="Contact us Now"
      >
        <img
          src={icon5}
          alt="imageclass"
          style={{
            width: "100%",
            minWidth: "70px",
            maxWidth: "70px",
            maxHeight: "70px",
            position: "fixed",
            bottom: "0%",
            left: "2%",
          }}
        />
      </ReactWhatsapp>
    </div>
  );
}
