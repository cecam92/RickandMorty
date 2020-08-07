import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Front from "./Front";
import Loading from "../Loading";
import NotFound from "../../containers/NotFound";

const FetchGQL = (props) => {
  const characterName = props.filter;
  const query = gql`
    {
      characters(filter: { name: "sanchez" }) {
        results {
          name
          status
          origin {
            name
          }
        }
      }
    }
  `;

  return (
    <Query query={query}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <NotFound />;
        const character = data.characters.results;

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

export default FetchGQL;
