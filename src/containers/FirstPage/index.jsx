import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import Schwifty from "../../assests/Schwifty.png";
import "./styles.scss";
function FirstPage() {
  return (
    <Fragment>
      <Hero />
      <main>
        <div className="schwiftyContainer">
          <Link to="/characters/" className="schwiftyContainer__image">
            <img className="schwifty-image" src={Schwifty} alt="get schwifty" />
          </Link>
        </div>
      </main>
      <footer>
        <h4 className="footer">Cesar Martinez </h4>
      </footer>
    </Fragment>
  );
}
export default FirstPage;
