import React, { Fragment } from "react";
import "./styles.scss";

const Card = () => {
  return (
    <Fragment>
      <div className="main-card-container">
        <div className="card-image-container">
          <img
            className="card-imagefade"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt=""
          />
          <img
            className="card-mainImage"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt=""
          />
        </div>
        <div className="card-details-container">
          <div className="card--statusIndicator"></div>
          <p>nombre</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
