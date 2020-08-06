import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import Schwifty from "../../Assests/Schwifty.png";
import "./styles.scss";
function FirstPage() {
  return (
    <Fragment>
      <Hero />

      <div className="schwiftyContainer">
        <Link to="/characters">
          <img className="schwifty-image" src={Schwifty} alt="get schwifty" />
        </Link>
      </div>
    </Fragment>
  );
}
export default FirstPage;
