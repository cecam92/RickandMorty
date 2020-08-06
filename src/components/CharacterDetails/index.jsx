import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Front from "./Front";

const CharacterDetails = (props) => {
  const characterID = props.id;

  return (
    <Query
      query={gql`
        {
          character(id: ${characterID}) {
            id
            name
            status 
            species
            type
            gender
           image
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>error...</p>;
        const character = data.character;

        return (
          <Fragment>
            <div className="cardContainer">
              <Front character={character} />
            </div>
          </Fragment>
        );
      }}
    </Query>
  );
};

export default CharacterDetails;
