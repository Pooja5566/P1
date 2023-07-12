import React from "react";
import icon5 from "./icon/Whatsapp.png";
import "./App.css";
import Phone2 from "./icon/Phone2.png";
export default function Phone() {
  return (
    <div className="Phonepart">
      <a href="tel:9899550700">
        <img className="Phoneimages" src={Phone2} />
      </a>
    </div>
  );
}
