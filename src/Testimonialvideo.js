import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { VideoPlayer } from "./VideoPlayer";
import "./App.css";

const Testimonial = () => {
  const videos = [
    { url: "https://youtu.be/GnAHSR7zCok",
    Image:"https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Flift.jpg?alt=media&token=3bed0f86-c43f-47eb-a2a4-186d9a815add",
    Title: "Lotus Apartment",
    Description :"Near DLF Farms,Chattarpur"
  
  },
    { url: "https://youtu.be/tZl_Ent1xeM",
    Image:"",
    Title: "Lotus Apartment",
    Description :"Near DLF Farms,Chattarpur" 
  },
    { 
      url: "https://youtu.be/WhLE6vH7WE0s",
    Image:"",
    Title: "Lotus Apartment",
    Description :"Near DLF Farms,Chattarpur"
  },
    { url: "https://www.youtube.com/watch?v=Hk7UG60U5C0&t=1446s",
    Image:"",
    Title: "Lotus Apartment",
    Description :"Near DLF Farms,Chattarpur"
  },
    { url: "https://www.youtube.com/watch?v=hR9hALjpQ-I" ,
    Image:"",
    Title: "Lotus Apartment",
    Description :"Near DLF Farms,Chattarpur"
  },
    { url: "https://www.youtube.com/watch?v=Xy1w3lhu0sE",
    Image:"",
    Title: "Lotus Apartment",
    Description :"Near DLF Farms,Chattarpur" 
  },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
    <Slider {...settings}>
      {/* <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4"> */}
      {videos.map((item,i) => (
           <>
           <div className="ggggh">
           <div className="row">
           <div className="col-6">
            <img class="rounded-circle shadow-1-strong" src={item.Image} /></div>
            <div className="col-6">
           <h1>{item.Title}</h1></div>
           </div>
           <div>
           </div>
        <p>{item.Description}</p></div>
        <VideoPlayer url={item.url} />
           
           
           </>
      ))}
      {/* </div>
      </div> */}
    </Slider>
    </>
  );
};

export default Testimonial;
