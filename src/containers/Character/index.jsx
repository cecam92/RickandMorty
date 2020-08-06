import React, { Fragment } from "react";
import Hero from "../../components/Hero";
import "./styles.scss";
import CharacterDetails from "../../components/CharacterDetails";

function Character(props) {
  const id = validarUrl(props);

  function validarUrl() {
    if (props.location.id) {
      return props.location.id;
    } else {
      return props.location.pathname.split("/")[2];
    }
  }

  return (
    <Fragment>
      <Hero />
      <CharacterDetails id={id} />
    </Fragment>
  );
}
export default Character;
