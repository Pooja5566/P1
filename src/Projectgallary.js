import React from "react";
import { Carousel } from "react-bootstrap";

import "./App.css";

export default function Projectgallary() {
  const images = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Flotus.png?alt=media&token=5d7d09f9-35de-4d59-ad1a-8120db06ed80",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Firis.jpg?alt=media&token=e7cae0ed-a293-496d-936a-b5ac9c33cc6f",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Firis.jpg?alt=media&token=e7cae0ed-a293-496d-936a-b5ac9c33cc6f",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Firis.jpg?alt=media&token=e7cae0ed-a293-496d-936a-b5ac9c33cc6f",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Firis.jpg?alt=media&token=e7cae0ed-a293-496d-936a-b5ac9c33cc6f",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Firis.jpg?alt=media&token=e7cae0ed-a293-496d-936a-b5ac9c33cc6f",
    },
  ];
  return (
    <div class="Propertyclass">
      {
        <Carousel>
          {images.map((item) => (
            <Carousel.Item key={images}>
              <img className="d-block w-100" src={item} alt={item} />
              <Carousel.Caption>
                <h3>{item}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      }
    </div>
  );
}
