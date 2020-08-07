import React, { Fragment, useState, useEffect } from "react";
import Hero from "../../components/Hero";
import ListOfCharacters from "../../components/ListOfCharacters/index.jsx";
import FilteredList from "../../components/ListOfCharacters/FilteredList";
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
