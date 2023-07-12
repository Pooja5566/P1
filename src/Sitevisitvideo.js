import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { VideoPlayer } from "./VideoPlayer";
// import "./App.css";

const Testimonial = () => {
  const videos = [
    { url: "https://www.youtube.com/watch?v=_mpWFrYDBMk" },
    { url: "https://www.youtube.com/watch?v=kQFUYaEk0Gw&t=11s" },
    { url: "https://www.youtube.com/watch?v=OUm2SIVGy7A" },
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
      {videos.map((item) => (
        <VideoPlayer url={item.url} />
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
//             title:"https://www.youtube.com/watch?v=_mpWFrYDBMk"
//             },
//             {
//                 title:"https://www.youtube.com/watch?v=kQFUYaEk0Gw&t=11s"
//                 },
//                 {
//                     title:"https://www.youtube.com/watch?v=OUm2SIVGy7A"
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
