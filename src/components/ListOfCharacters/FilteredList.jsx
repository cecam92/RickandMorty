// import React, { Fragment } from "react";
// import { Query } from "react-apollo";
// import { gql } from "apollo-boost";
// import Loading from "../Loading";
// import NotFound from "../../containers/NotFound";
// import { Link } from "react-router-dom";
// import CharacterCard from "../CharacterCard";

const FilteredList = (props) => {
  const characterName = props;
  console.log(characterName);

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
  return characters;
};
export default FilteredList;
