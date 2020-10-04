import React, { Fragment, useState, useEffect } from "react";
import Hero from "../../components/Hero";
import { useSpring, animated as a } from "react-spring";
import ListOfCaracters from "../../components/ListOfCharacters/index.jsx";

function Home() {
  const [showHero, setShowHero] = useState(false);
  const headerProps = useSpring({
    opacity: showHero ? 1 : 0,
  });

  function showIt() {
    if (document.documentElement.scrollTop > 40) {
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
      <a.div style={headerProps}>
        <Hero />
      </a.div>
      <ListOfCaracters />
    </Fragment>
  );
}

export default Home;
