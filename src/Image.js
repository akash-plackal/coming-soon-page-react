import React from "react";
import "./image.css";
import hero from "./hero-desktop.jpg";
import Mhero from "./hero-mobile.jpg";

export default function Image() {
  return (
    <div>
      <div className="hero">
        <img className="hero-d" src={hero} alt="girl" />
        <img className="hero-m" src={Mhero} alt="girl" />
      </div>
    </div>
  );
}
