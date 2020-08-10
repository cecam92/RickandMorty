import React, { Fragment, useState, useEffect } from "react";
import Hero from "../../components/Hero";
import ListOfCaracters from "../../components/ListOfCharacters/index.jsx";

function Home() {
  const [showHero, setShowHero] = useState(false);

  function showIt() {
    if (document.documentElement.scrollTop != 0) {
      setShowHero(false);
    } else {
      setShowHero(true);
    }
  }
  useEffect(() => {
    showIt();
    window.addEventListener("scroll", showIt);
    return () => {
      window.removeEventListener("scroll", showIt);
    };
  }, []);
  return (
    <Fragment>
      {showHero && <Hero />}
      <ListOfCaracters />
    </Fragment>
  );
}

export default Home;
