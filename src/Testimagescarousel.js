import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

export default function Testimagescarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <div>
      <Slider {...settings}>
        <div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2FT1.png?alt=media&token=abebd484-d249-41d9-aa56-432e65cc171c"
              alt=""
            ></img>
          </div>
        </div>
        <div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2FT2.png?alt=media&token=da8703f9-ea09-4e54-9a65-bc04bce780ee"
              alt=""
            ></img>
          </div>
        </div>
        <div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2FT3.png?alt=media&token=3b5ebc30-80ff-4178-8073-d319c8520bc7"
              alt=""
            ></img>
          </div>
        </div>
        <div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2FT4.png?alt=media&token=988a9c66-4a9c-4168-b20f-283b6e1ec77b"
              alt=""
              loading="lazy"
            ></img>
          </div>
        </div>
        <div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2FT5.png?alt=media&token=e3d8ecb5-4038-48d6-a07a-d285660d6b91"
              alt=""
            ></img>
          </div>
        </div>
        <div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2FT7.png?alt=media&token=8e24a1f0-7cbe-458e-a61e-a30ebb25a3e7"
              alt=""
            ></img>
          </div>
        </div>
      </Slider>
    </div>
  );
}
