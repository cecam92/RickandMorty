import React, { Fragment } from "react";
import "./styles.scss";
import HeroImage from "../../Assests/HeroImage.png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <Fragment>
      <header className="hero">
        <Link to="/">
          <img className="hero__image" src={HeroImage} alt="Hero"></img>
        </Link>
      </header>
    </Fragment>
  );
}
export default Hero;
