import React, { Fragment, useState, useEffect } from "react";
import "./styles.scss";
import CharacterCard from "../CharacterCard";
//import useFetchData from "../../hooks/useFetchData";

function ListOfCaracters() {
  const [page, setPage] = useState(1);
  const api = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((response) => {
        setCharacters((characters) => characters.concat(response.results));
      });
  }, [api]);

  return (
    <Fragment>
      <main>
        <ul className="listCharacters">
          {" "}
          {console.log(characters)}
          {characters.map((character) => (
            <li className="characters" key={character.id}>
              <CharacterCard character={character} />
            </li>
          ))}
          {/* <p
            onClick={() => {
              setPage(page + 1);
            }}
          >
            sddadas
          </p> */}
          {window.addEventListener("scroll", () => {
            if (
              window.innerHeight + document.documentElement.scrollTop !==
              document.documentElement.offsetHeight
            ) {
              return;
            } else {
              setPage(page + 1);
            }
          })}
        </ul>
      </main>
    </Fragment>
  );
}

export default ListOfCaracters;
