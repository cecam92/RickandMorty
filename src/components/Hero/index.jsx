import React, { Fragment } from "react";
import "./styles.scss";
import HeroImage from "../../Assests/HeroImage.png";
function Hero() {
  return (
    <Fragment>
      <header className="hero">
        <img className="hero__image" src={HeroImage} alt="Hero"></img>
      </header>
    </Fragment>
  );
}
export default Hero;
