import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { VideoPlayer } from "./VideoPlayer";
import "./App.css";

const Testimonial = () => {
  const videos = [
    { url: "https://www.youtube.com/watch?v=EuA6cgy4DYE&t=605s",
    description: "Lotus Apartment",
    Location :"Near DLF Farms,Chattarpur"
  },
    { url: "https://www.youtube.com/watch?v=mfoNVNjUB4s&t=346s",
    description: "Daisy Apartment",
    Location :"Near DLF Farms,Chattarpur"},
    { url: "https://www.youtube.com/watch?v=7kRKKMbjUvE&t=31s",
    description: "Magnolia Apartment",
    Location :"Near South Asian University,Chattarpur"},
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
   
    <Slider {...settings}>
      {videos.map((item,i) => (
        <><VideoPlayer url={item.url} />
         <div className="v1">
        <h1>{item.description}</h1>
        <h2>{item.Location}</h2>
        </div></>
      ))}
    </Slider>
  
  );
};

export default Testimonial;

// import React from 'react'
// import ReactPlayer from "react-player";
// import { Carousel } from 'react-bootstrap';

// export default function Video() {
//     const videos=[
//         {
//             title:"https://www.youtube.com/watch?v=EuA6cgy4DYE&t=605s"
//             },
//             {
//                 title:"https://www.youtube.com/watch?v=mfoNVNjUB4s&t=346s"
//                 },
//                 {
//                     title:"https://www.youtube.com/watch?v=7kRKKMbjUvE&t=31s"
//                     }
//     ]
//   return (

//     <div>
//         <div class="row">

//         {

//            videos.map(item =>(
//             <div class="col-sm-3 "><ReactPlayer url={item.title} /></div>

//            )
//        )}

//   </div>

//     </div>
//   )
// }
