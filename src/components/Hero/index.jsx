import React, { Fragment, useEffect, useState } from "react";
import "./styles.scss";
import HeroImage from "../../Assests/HeroImage.png";
import { Link } from "react-router-dom";

function Hero() {
  const [showLogo, setShowLogo] = useState(true);

  const ScrollingBar = () => {
    if (document.documentElement.scrollTop <= 100) {
      setShowLogo(true);
    } else {
      setShowLogo(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", ScrollingBar);
    return () => {
      window.removeEventListener("scroll", ScrollingBar);
    };
  }, [showLogo]);

  if (showLogo) {
    return (
      <Fragment>
        <header className="hero sticky">
          <Link to="/characters">
            <img className="hero__image" src={HeroImage} alt="Hero Logo"></img>
          </Link>
        </header>
      </Fragment>
    );
  }

  if (!showLogo) {
    return (
      <Fragment>
        <header className="hero sticky">
          <div className="heroSearch">
            <input
              className="heroSearch__input"
              placeholder="search by caracter o Id"
            />
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Hero;
