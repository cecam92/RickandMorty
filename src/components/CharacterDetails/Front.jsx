import React, { Fragment } from "react";
import "./styles.scss";
function Front(props) {
  const { character } = props;
  return (
    <Fragment>
      <div className="detailsCard">
        <section className="detailsCard__image">
          <img
            className="detailsCard__image-faded"
            src={character.image}
            alt="character"
          />
          <img
            className="detailsCard__image-main"
            src={character.image}
            alt="character"
          />
        </section>

        <section className="detailsCard__info">
          <h2 className="detailsCard-name">{character.name}</h2>
          <small className="detailsCard-id">{character.id}</small>

          <p className="detailsCard-status">
            <span
              className={`card--statusIndicator ${character.status.toLowerCase()}`}
            ></span>
            {character.status} - {character.species}
          </p>

          <p className="detailsCard-type"> {character.type}</p>
          <p className="detailsCard-gender">{character.gender}</p>
          <p className="detailsCard-lastLocation">Last known location:</p>
          <p className="detailsCard-location"> {character.location.name}</p>
        </section>
      </div>
    </Fragment>
  );
}
export default Front;
