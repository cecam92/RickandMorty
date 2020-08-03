import React, { Fragment, useState, useEffect } from "react";
import "./styles.scss";
import CharacterCard from "../CharacterCard";
function ListOfCaracters() {
  const [page, setPage] = useState(1);
  const api = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then(
        (response) => {
          setIsLoaded(true);
          setNextPage(response.info.next);
          setItems(response.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Fragment>
        <main>
          <ul className="listCharacters">
            {items.map((character) => (
              <li className="characters" key={character.id}>
                <CharacterCard character={character} />
              </li>
            ))}
          </ul>
        </main>
      </Fragment>
    );
  }
}
export default ListOfCaracters;
