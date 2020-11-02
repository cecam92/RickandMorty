import React, { Fragment } from "react";
import "./styles.scss";

const Card = (props) => {
  const { character } = props;

  const status = character.status.toLowerCase();

  return (
    <Fragment>
      <div className="main-card-container">
        <div className="card-image-container">
          <img className="card-imagefade" src={character.image} alt="" />
          <img className="card-mainImage" src={character.image} alt="" />
        </div>
        <div className="card-details-container">
          <div className="card-details-name">
            <span className={`card--statusIndicator ${status}`}></span>
            <p>{character.name}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
