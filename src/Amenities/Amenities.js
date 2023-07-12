import React from "react";
import "./Amenities.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const projectList = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2FModular.jpg?alt=media&token=2eca232c-75f2-4cd9-8fb0-6e08c39ce42a",
    title: "Modular Kitchen",
    description:
      "We have taken care of the aesthetics and design of the kitchen will fully modular facilities.",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2FTerrace.jpg?alt=media&token=fbfa0f67-8dcc-491b-9271-24b49f7cbb07",
    title: "Terrace Garden ",
    description:
      "We have taken care of the aesthetics and design of the kitchen will fully modular facilities.",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Fcar.jpg?alt=media&token=38c7d493-37e0-4fad-a5f2-a479d1e80cfd",
    title: "Car Parking",
    description:
      "We have taken care of the aesthetics and design of the kitchen will fully modular facilities.",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Fgated.jpg?alt=media&token=2349f9ef-6241-43e7-b112-ba3a9ca75f16",
    title: "Gated Compound",
    description:
      "We have taken care of the aesthetics and design of the kitchen will fully modular facilities.",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Flift.jpg?alt=media&token=3bed0f86-c43f-47eb-a2a4-186d9a815add",
    title: "Branded Lift",
    description:
      "We have taken care of the aesthetics and design of the kitchen will fully modular facilities.",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2FSafety.jpg?alt=media&token=6b60b02a-b200-45cc-b110-e8288cfd7876",
    title: "Fire Safety",
    description:
      "We have taken care of the aesthetics and design of the kitchen will fully modular facilities.",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Fwater%20(1).jpg?alt=media&token=f929087b-e05e-467c-924d-22e69bd81b3b",
    title: "2 Source Of Water 24*7",
    description:
      "We have taken care of the aesthetics and design of the kitchen will fully modular facilities.",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Fregisterprop.jpg?alt=media&token=0793fdbb-9c36-424a-950b-af5eb475bbe2",
    title: "Registry & Loan Available",
    description:
      "We have taken care of the aesthetics and design of the kitchen will fully modular facilities.",
  },
];

export default function Amenities() {
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {projectList.map((item,i) => (
        <>
        <div className="v1">
          <img src={item.image} />
         <h1>{item.title}</h1>
        
        </div></>
      ))}
    </Slider>
  
  );
};





















//     <div>
//       <div className="row">
//         {projectList.map((item, i) => {
//           return (
//             <div className="col-sm-6">
//               <ListProject item={item} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
// const ListProject = ({ item }) => {
//   return (
//     <div className="Amenities">
//       <img src={item.image} />
//       <div className=" Amenities childContent">
//         <div style={{ width: "100%" }}>
//           <div className=" Amenitiesall">
//             <h3>{item.title}</h3>
//             <p>{item.description}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
