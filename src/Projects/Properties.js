import React from "react";
import PopularProject from "../popularproject/PopularProject";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Projects.css";

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
export default function Projects() {
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
      <>
        <div className="Projectsclass">
          <img src="https://img.freepik.com/free-photo/realtor-making-deal-with-customer-office_23-2147764245.jpg?size=626&ext=jpg&uid=R76509357&ga=GA1.2.309568635.1685353745&semt=ais" />
        </div>
        <div className="Latestheading">
          <h1>Our Latest Ongoing Projects</h1>
        </div>
        <div className="Mainhighlights">
          <h1>
            Flower(Projects) <br></br>of Bhavishya Nirman Developers
          </h1>
        </div>

        <div className="mainproj">
          <Slider {...settings}>
            <div>
              <div className="card">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2FLily.a11e6bb1.png?alt=media&token=008678f1-ab5f-41b0-b60c-fac3d7b00dc6"
                  alt=""
                ></img>
              </div>
            </div>
            <div>
              <div className="card">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Fmagnolia%20(1).png?alt=media&token=ee823dd0-6e3e-4c37-ba4b-0cde679f34a5"
                  alt=""
                ></img>
              </div>
            </div>
            <div>
              <div className="card">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Fdaisy.png?alt=media&token=4ec632b7-5e51-433f-9a94-ab745f6c1180"
                  alt=""
                ></img>
              </div>
            </div>

            <div>
              <div className="card">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2FLily.a11e6bb1.png?alt=media&token=008678f1-ab5f-41b0-b60c-fac3d7b00dc6"
                  alt=""
                ></img>
              </div>
            </div>
          </Slider>
        </div>
        <div></div>
      </>
      <div>
        <PopularProject />
      </div>
    </>
  );
}
