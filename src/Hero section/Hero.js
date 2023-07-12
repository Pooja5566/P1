import React from "react";
import "./Hero.css";

export default function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="Heroimg" src={props.heroImage} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttontext}
          </a>
        </div>
      </div>
    </>
  );
}
