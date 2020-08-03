import React, { Fragment } from "react";
import Hero from "../../components/Hero";
import ListOfCharacters from "../../components/ListOfCharacters/index.jsx";
function Home() {
  return (
    <Fragment>
      <Hero />
      <ListOfCharacters />
    </Fragment>
  );
}
export default Home;
