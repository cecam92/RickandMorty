import { useState, useEffect } from "react";

const useFetchData = (API) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((response) => {
        setCharacters(response.results);
      });
  }, [API]);
  console.log(characters);
  return characters;
};

export default useFetchData;
