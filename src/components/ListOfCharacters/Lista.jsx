import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CharacterCard from "../CharacterCard";

function Lista(props) {
  const characters = props.data;

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
