import React, { Fragment, useState, useEffect } from "react";
import "./styles.scss";
import CharacterCard from "../CharacterCard";
import { Link } from "react-router-dom";
import FilteredList from "./FilteredList";
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
////////////////////////////////////////////

function ListOfCaracters() {
  const localCharacters = () => {
    return getCharacters() == null ? [] : getCharacters();
  };
  const index = () => {
    return getPage() == null ? 1 : parseInt(getPage());
  };
  const [showBar, setShowBar] = useState(false);
  const [page, setPage] = useState(index);
  const [totalPages, setTotalPages] = useState(28790);
  const api = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const [characters, setCharacters] = useState(localCharacters);
  const [filter, setFilter] = useState("");
  const [filtered, setFiltered] = useState([]);
  function isScrolling() {
    const offsetOnMain = 100;
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight + offsetOnMain
    ) {
      return;
    } else {
      if (page < totalPages) {
        setPage(page + 1);
        console.log(page);
      }
    }
  }
  function Searchbar() {
    if (document.documentElement.scrollTop > 143) {
      setShowBar(true);
    } else {
      setShowBar(false);
      setFilter("");
    }
  }
  function chad() {
    if (filter !== "") {
      setFiltered([
        {
          id: 1,
          name: "Rick Sanchez",
          status: "Alive",
          origin: "Earth",
          type: "",
        },
        {
          id: 2,
          name: "Morty Smith",
          status: "Alive",
          origin: "Earth",
          type: "",
        },
      ]);
    }
  }
  console.log(filter);
  console.log(filtered);

  useEffect(() => {
    window.addEventListener("scroll", Searchbar);
    chad();
    if (filtered !== "") {
      setCharacters(filtered);
      setShowBar(true);
      document.documentElement.scrollTop = 143;
    }
    return () => {
      window.removeEventListener("scroll", Searchbar);
      setShowBar(false);
    };
  }, [filter]);

  useEffect(() => {
    fetchData(api);
    saveInLocal(characters, page);
    window.addEventListener("scroll", isScrolling);
    window.addEventListener("scroll", Searchbar);
    return () => {
      window.removeEventListener("scroll", isScrolling);
      window.removeEventListener("scroll", Searchbar);
      setShowBar(false);
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

  function inputValue(e) {
    setFilter(e.target.value);
  }

  return (
    <Fragment>
      <main>
        {showBar && (
          <header className="sticky">
            <div className="Search">
              <input
                className="Search__input"
                placeholder="search by caracter o Id"
                onChange={inputValue}
              />
            </div>
          </header>
        )}
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
