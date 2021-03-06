import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Front from "./Front";
import Loading from "../Loading";
import NotFound from "../../containers/NotFound";

const CharacterDetails = (props) => {
  const characterID = props.id;
  const query = gql`
 {
   character(id: ${characterID}) {
     id
     name
     status 
     species
     type
     gender
    image
    location{
      name
    }
   }
 }
`;
  return (
    <Query query={query}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <NotFound />;
        const character = data.character;

        return (
          <Fragment>
            <Front character={character} />
          </Fragment>
        );
      }}
    </Query>
  );
};

export default CharacterDetails;
