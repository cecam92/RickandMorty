import React, { Fragment } from "react";
import "./styles.scss";
function Front(props) {
  const { character } = props;
  return (
    <Fragment>
      <div className="detailsCard">
        <section className="detailsCard__image">
          <img src={character.image} alt="character" />
        </section>

        <section className="detailsCard__info">
          <small id="id">{character.id}</small>
          <h1 id="name">{character.name}</h1>
          <p id="status">Status: {character.status}</p>
          <p id="species">Species: {character.species}</p>
          <p id="type">Type: {character.type}</p>
          <p id="gender">Gender: {character.gender}</p>
        </section>
      </div>
    </Fragment>
  );
}
export default Front;
