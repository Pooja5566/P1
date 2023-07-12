import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Amenities from "./Amenities/Amenities";
import ReactPlayer from "react-player";

import "./App.css";
import { VideoPlayer } from "./VideoPlayer";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
      }}
      onClick={onClick}
    />
  );
}
export default function Hero1(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="Daisyhh ">
        <div className="row">
          <div className="col">
            <div className="D1 ">
              <h1>{props.H1}</h1>
            </div>
          </div>
          <div className="col">
            <div className="D1 ">
              <h2>
                Starting from<br></br>
                {props.H2}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className={props.mainproj}>
        <Slider {...settings}>
          <div>
            <div className="card">
              <img src={props.heroImage} alt=""></img>
            </div>
          </div>
          <div>
            <div className="card">
              <img src={props.heroImage1} alt=""></img>
            </div>
          </div>
          <div>
            <div className="card">
              <img src={props.heroImage2} alt=""></img>
            </div>
          </div>
          <div>
            <div className="card">
              <img src={props.heroImage3} alt=""></img>
            </div>
          </div>
        </Slider>
      </div>

      <div className="contactnow">
        <h1>Price Table</h1>

        <div className="row">
          {props.type2 !== "iriss" && (
            <div className="col">
              <div className="Pricingg">
                <h1>{props.Head1}</h1>
                <h2>{props.Head12}</h2>
                <p>{props.P1}</p>
              </div>
            </div>
          )}
          {props.type3 !== "irisss" && (
            <div className="col">
              <div className="Pricingg">
                <h1>{props.Head2}</h1>
                <h2>{props.Head22}</h2>
                <p>{props.P2}</p>
              </div>
            </div>
          )}
          {props.type4 !== "irissss" && (
            <div className="col">
              <div className="Pricingg">
                <h1>{props.Head3}</h1>
                <h2>{props.Head32}</h2>
                <p>{props.P2}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="allbuttons">
        <a
          className="Btntext"
          href={props.pdf}
          color="transparent"
          target="_blank"
          // onClick={() => window.open("images/daisy.pdf")}
        >
          {props.bt1}
        </a>
        <br></br>
        <a href="tel:9899550700">
          <button className="Btntext">Call Now</button>
        </a>
      </div>

      <div className="Popularall">
        <h1>Walk-through Video</h1>
      </div>
      <div className="Videokk">
        {/* <video src={props.video12} autoPlay loop muted /> */}
        <VideoPlayer url={props.video12} />
        <div className="allbuttons">
          <a href="tel:9899550700">
            <button className="Btntext">Call Now</button>
          </a>
        </div>
      </div>

      <div className="Popularall">
        <h1>Amenities</h1>
        <Amenities />
      </div>
      <div className="Payplan">
        <h1>Payment Plan</h1>
        <div className="row">
          <div className="col">
            <div className="D1">
              <h1>20:</h1>
            </div>
          </div>
          <div className="col">
            <div className="D1">
              <h1>20:</h1>
            </div>
          </div>
          <div className="col">
            <div className="D1">
              <h1>60:</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="Floorplans">
        <h1>{props.fname}</h1>

        <div className="row">
          <div className="col"></div>

          {props.type !== "iris" && (
            <div className="col">
              <div className="Floorclass">
                <img src={props.F2} />
                <h2>{props.Hed2}</h2>
              </div>
            </div>
          )}
          {props.type !== "iris" && (
            <div className="col">
              <div className="Floorclass">
                <img src={props.F1} />
                <h2>{props.Hed1}</h2>
              </div>
            </div>
          )}
          <div className="col"></div>

          <div className="row">
            <div className="col"></div>
            {props.type1 !== "daisy1" && (
              <div className="col">
                <div className="Floorclass">
                  <img src={props.F3} />
                  <h2>{props.Hed3}</h2>
                </div>
              </div>
            )}
            {props.type1 !== "daisy1" && (
              <div className="col">
                <div className="Floorclass">
                  <img src={props.F4} />
                  <h2>{props.Hed4}</h2>
                </div>
              </div>
            )}

            <div className="col"></div>
            {props.type !== "iris" && (
              <div className="row">
                <div className="col"></div>
                {props.type !== "daisy" && (
                  <div className="col">
                    <div className="Floorclass">
                      <img src={props.F5} />
                      <h2>{props.Hed5}</h2>
                    </div>
                  </div>
                )}
                {props.type !== "daisy" && (
                  <div className="col">
                    <div className="Floorclass">
                      <img src={props.F6} />
                      <h2>{props.Hed6}</h2>
                    </div>
                  </div>
                )}
                <div className="col"></div>
              </div>
            )}
          </div>
        </div>
        <div className="col"></div>
        <div className="allbuttons">
          <a
            className="Btntext"
            href={props.pdf}
            color="transparent"
            target="_blank"
            // onClick={() => window.open("images/daisy.pdf")}
          >
            {props.bt1}
          </a>
          <br></br>
          <a href="tel:9899550700">
            <button className="Btntext">Call Now</button>
          </a>
        </div>
      </div>
    </>
  );
}
