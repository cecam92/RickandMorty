import React, { Fragment } from "react";
import "./styles.scss";
function CharacterCard(props) {
  const { character } = props;
  return (
    <Fragment>
      <div className="characterCard">
        <section className="characterCard__image">
          <img src={character.image} alt="character" />
        </section>

        <section className="characterCard__info">
          <h2 id="name">{character.name}</h2>
          <p id="status">Status: {character.status}</p>
          <p id="origin">Origin: {character.origin.name}</p>
        </section>
      </div>
    </Fragment>
  );
}
export default CharacterCard;
