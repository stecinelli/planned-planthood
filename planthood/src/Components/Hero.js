import React from "react";
import "../Style/Hero.css";
import seedling from "../assets/seedling.svg";
import dig from "../assets/dig.svg";
import logo from "../assets/Logo.svg";

export const Hero = () => {
  return (
    <div className="box-hero">
      <div className="hero">
        <div className="overlap-group">
          <img className="seedling" alt="Seedling" src={seedling} />
        </div>
        <div className="overlap">
          <img className="dig" alt="Dig" src={dig} />
        </div>
        <div className="logo-wrapper">
          <img className="logo" alt="Logo" src={logo} />
        </div>
      </div>
    </div>
  );
};
