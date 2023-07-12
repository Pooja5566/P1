import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import Social2 from "./Social2";
import "./App.css";
import Testimonialvideo from "./Testimonialvideo";
import Video from "./Video";
import { VideoPlayer } from "./VideoPlayer";
import PopularProject from "./popularproject/PopularProject";
import Amenities from "./Amenities/Amenities";
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
export default function Hero4(props) {
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
      <div className="Allone">
        <div className="Popularall">
          <h1>Flats In Chattarpur </h1>
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
            <div>
              <div className="card">
                <img src={props.heroImage4} alt=""></img>
              </div>
            </div>
            <div>
              <div className="card">
                <img src={props.heroImage5} alt=""></img>
              </div>
            </div>
            <div>
              <div className="card">
                <img src={props.heroImage6} alt=""></img>
              </div>
            </div>
            <div>
              <div className="card">
                <img src={props.heroImage7} alt=""></img>
              </div>
            </div>
          </Slider>
        </div>

        <div className="Flatp">
          <p>
            Imagine your dream home ( 3 bhk flat in chattarpur ) in lush green
            environment near metro station that has connectivity throughout
            Delhi NCR. Bhavishya Nirman Developers one of the leading real
            estate developer in South Delhi has multiple location based flats in
            Chattarpur near to metro station, temple, mosque, farm houses. The
            best part is you don’t have to worry about the market, hospital,
            bank and all your daily needs. Get a guaranteed loan Pay No
            Brokerage Easy Documentation process 100% Transparency
          </p>

          <div className="Popularall">
            <h1>Amenities</h1>
            <Amenities />
          </div>
          <h2>Temples Near Chattarpur South Delhi: </h2>
          <ol type="1">
            <li>Chattarpur Temple</li>
            <li>Shree Adya Katyayani Shaktipeeth Mandir </li>
            <li>Radha Soami Satsangs</li>
            <li>Prachin Baba Nagpal Mandir</li>{" "}
          </ol>
          <h2>Mosques Near Chattarpur South Delhi:</h2>
          <ol type="1">
            <li>Choti Masjid</li>
            <li> Pare Wali Masjid </li>
            <li>Madina Masjid</li>
            <li>Idgaah Wali Masjid</li>
            <li>Dibiyah Wali Masjid</li>
            <li>Lal Masjid</li>
            <li>Satbari Chhoti Masjid</li>
          </ol>
          <div className="Popularall">
            <h1>Walk-through Video</h1>
            <Video />
          </div>
          <h2>Schools In Chattarpur South Delhi:</h2>
          <ol type="1">
            <li>Saint Humaira Public School </li>
            <li>Saint Maria Convent School</li>
            <li>Markaze Tasawwuf </li>
            <li>Parent’s Pride Nursery Play School </li>
            <li>Sant Nagpal Public School </li>
            <li>Shivani Vidya Niketan Public School </li>
            <li>Government Girls’ Senior Secondary School</li>
            <li>Government Boys’ Senior Secondary School</li>
            <li>Rabindranath World School </li>
            <li>St. John’s School </li>
            <li>Chattarpur Oxford Angel Public School </li>
          </ol>
          <h2>Hospitals In Chattarpur South Delhi:</h2>
          <ol type="1">
            <li>Yogmaya Multi-speciality Hospital</li>
            <li></li>Apex Multi-speciality Hospital and Skin Clinic
            <li>Baba Nagpal Trust Hospital </li>
            <li>Manchanda Hospital</li>
            <li>Nanda Hospital</li>
            <li>GNS Multi-speciality Hospital</li>
          </ol>
          <h2>Government Facilities In Chattarpur:</h2>
          <ol type="1">
            <li>Govt. Electricity Meter ( BSES )</li>
            <li>Govt. IGL Gas</li>
            <li>Pipeline Water Supply & Electricity Supply</li>
          </ol>
        </div>
        <Social2 />
        <div className="Popularall">
          <h1>Popular Projects in Chattarpur</h1>
          <PopularProject />
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
                  <p>{props.P3}</p>
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
          >
            {props.bt1}
          </a>
          <br></br>
          <a href="tel:9899550700">
            <button className="Btntext">Call Now</button>
          </a>
        </div>

        <div className="Popularall">
          <h2>What Our Client Says ?</h2>
          <Testimonialvideo />
        </div>

        <div className="allbuttons">
          <a href="tel:9899550700">
            <button className="Btntext">Call Now</button>
          </a>
        </div>
      </div>
    </>
  );
}
