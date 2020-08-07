import React, { Fragment } from "react";
import Hero from "../../components/Hero";
import ListOfCaracters from "../../components/ListOfCharacters/index.jsx";

function Home() {
  return (
    <Fragment>
      <Hero />
      <ListOfCaracters />
    </Fragment>
  );
}

export default Home;
