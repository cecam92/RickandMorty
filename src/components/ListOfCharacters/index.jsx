import React, { Fragment, useState, useEffect } from "react";
import "./styles.scss";
import CharacterCard from "../CharacterCard";
//import useFetchData from "../../hooks/useFetchData";

function ListOfCaracters() {
  const [page, setPage] = useState(1);
  const api = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const [characters, setCharacters] = useState([]);

  function isScrolling() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    } else {
      setPage(page + 1);
    }
  }
  useEffect(() => {
    fetchData(api);
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, [api]);

  function fetchData(url) {
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setCharacters((characters) => characters.concat(response.results));
      });
  }

  return (
    <Fragment>
      <main>
        <ul className="listCharacters">
          {console.log(characters)}
          {characters.map((character) => (
            <li className="characters" key={character.id}>
              <CharacterCard character={character} />
            </li>
          ))}
          <button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            sddadas
          </button>
        </ul>
      </main>
    </Fragment>
  );
}

export default ListOfCaracters;
