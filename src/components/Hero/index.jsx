import React, { Fragment } from "react";
import "./styles.scss";
import HeroImage from "../../assests/HeroImage.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Fragment>
      <header className="hero">
        <Link to="/characters/">
          <img className="hero__image" src={HeroImage} alt="Hero Logo"></img>
        </Link>
      </header>
    </Fragment>
  );
}

export default Hero;
