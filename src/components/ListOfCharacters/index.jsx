import React, { Fragment, useState, useEffect } from "react";
import "./styles.scss";
import CharacterCard from "../CharacterCard";
import { Link } from "react-router-dom";
//import useFetchData from "../hooks/useFetchData";

function saveInLocal(cards, index) {
  localStorage.setItem("characters", JSON.stringify(cards));
  localStorage.setItem("page", index);
}
function getCharacters() {
  const pepito = localStorage.getItem("characters");
  const data = JSON.parse(pepito);
  return data;
}
function getPage() {
  const index = localStorage.getItem("page");
  return index;
}

function ListOfCaracters() {
  const localCharacters = () => {
    return getCharacters() == null ? [] : getCharacters();
  };

  const index = () => {
    return getPage() == null ? 1 : parseInt(getPage());
  };

  const [page, setPage] = useState(index);
  const [totalPages, setTotalPages] = useState(28790);
  const api = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const [characters, setCharacters] = useState(localCharacters);

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
    saveInLocal(characters, page);
    window.addEventListener("scroll", isScrolling);
    return () => {
      window.removeEventListener("scroll", isScrolling);
    };
  }, [api, page]);

  function fetchData(url) {
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
