import React from "react";
import "./App.css";

export default function Abouthome() {
  return (
    <>
      <div className="Abouthome">
        <div className="row">
          <div className="col-sm-6">
            <div className="logosection">
              <img src="https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Fbn.3b598744.png?alt=media&token=b8ae751a-31bd-41ff-8736-89130bdb0f2a" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="Aboutsection">
              <h1>About Us</h1>
              <h3>
                Bhavishya Nirman Developers is one of the leading real estate
                companies in Chattarpur, South Delhi that offers 2 BHK, 3 BHK &
                4 BHK flats in chattarpur including ready to move flats, loan
                and registry flats, builder floors in South Delhi without paying
                brokerage fees. We are on a mission to build better homes for
                families at highly affordable pricing with extravagant housing
                experience.{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
