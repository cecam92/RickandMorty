import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Loading from "../Loading";
import NotFound from "../../containers/NotFound";
import { Link } from "react-router-dom";
import CharacterCard from "../CharacterCard";

const FilteredList = (props) => {
  const characterName = props;
  console.log(characterName);
  const query = gql(`{
    characters( filter: { name: "Morty" }) {
      results {
        name
        status
      }
    }
  }
  `);
  console.log(`query ${query}`);
  return (
    <Query query={query}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <NotFound />;
        //const characters = data.characters.results;
        const characters = [
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
        ];
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
      }}
    </Query>
  );
};

export default FilteredList;
