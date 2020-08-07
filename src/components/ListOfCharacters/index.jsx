import React, { Fragment, useState, useEffect } from "react";
import "./styles.scss";
import CharacterCard from "../CharacterCard";
import { Link } from "react-router-dom";
//import useWithRest from "./useWithRest";

function ListOfCaracters() {
  const [page, setPage] = useState(1);
  const api = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(7689);

  function getData(url) {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setCharacters((characters) => characters.concat(response.results));
        setTotalPages(response.info.pages);
      });
  }

  function isScrolling() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight + 100
    ) {
      return;
    } else {
      setPage(page + 1);
    }
  }
  useEffect(() => {
    getData(api);
    window.addEventListener("scroll", isScrolling);
    return () => {
      window.removeEventListener("scroll", isScrolling);
    };
  }, [api, page]);
  console.log(page);

  return (
    <Fragment>
      <main>
        <ul className="listCharacters">
          {characters.map((character) => (
            <li className="characters" key={character.id}>
              <Link
                to={{
                  pathname: `/characters/${character.id}`,
                  id: character.id,
                }}
              >
                <CharacterCard character={character} />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Fragment>
  );
}

export default ListOfCaracters;
