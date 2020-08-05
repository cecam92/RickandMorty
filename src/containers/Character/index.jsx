import React, { Fragment } from "react";
import Hero from "../../components/Hero";
import "./styles.scss";
import CharacterDetails from "../../components/CharacterDetails";

function Character(props) {
  const id = props.location.id;

  return (
    <Fragment>
      <Hero />
      <CharacterDetails id={id} />
    </Fragment>
  );
}
export default Character;
