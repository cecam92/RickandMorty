import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CharacterCard from "../CharacterCard";

function saveInLocal(cards, index) {
  localStorage.setItem("characters", JSON.stringify(cards));
  localStorage.setItem("page", index);
}

function Lista(props) {
  const characters = props.data;
  const page = props.page;
  return (
    <Fragment>
      <ul className="listCharacters">
        {characters.map((character) => (
          <li className="characters" key={character.id}>
            <Link
              to={{
                pathname: `/characters/${character.id}`,
                id: character.id,
              }}
              onClick={saveInLocal(characters, page)}
            >
              <CharacterCard character={character} />
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default Lista;
