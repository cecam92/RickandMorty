import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import Buried from "../../assests/Buried.jpeg";
import "./styles.scss";
function NotFound() {
  return (
    <Fragment>
      <Hero />
      <main>
        <div className="notFoundContainer">
          <Link to="/characters">
            <img className="notFound-image" src={Buried} alt="404 not found" />
          </Link>
        </div>
      </main>
    </Fragment>
  );
}
export default NotFound;
