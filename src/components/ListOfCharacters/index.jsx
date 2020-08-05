import React, { Fragment, useState, useEffect } from "react";
import "./styles.scss";
import CharacterCard from "../CharacterCard";
import { Link } from "react-router-dom";
//import useFetchData from "../hooks/useFetchData";

function ListOfCaracters() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const api = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const [characters, setCharacters] = useState([]);

  function isScrolling() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    } else {
      if (page < totalPages) {
        setPage(page + 1);
      }
    }
  }
  useEffect(() => {
    fetchData(api);
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, [api, page]);

  function fetchData(url) {
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setCharacters((characters) => characters.concat(response.results));
        setTotalPages(response.info.pages);
      });
  }

  return (
    <Fragment>
      <main>
        <ul className="listCharacters">
          {characters.map((character) => (
            <li className="characters" key={character.id}>
              <Link
                to={{
                  pathname: `/${character.id}`,
                  id: character.id,
                }}
              >
                <CharacterCard character={character} />
              </Link>
            </li>
          ))}
          {/* <button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            sddadas
          </button> */}
        </ul>
      </main>
    </Fragment>
  );
}

export default ListOfCaracters;
