import { useState, useEffect } from "react";

const useFetchData = (API) => {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(2);
  fetch(API)
    .then((res) => res.json())
    .then((response) => {
      setCharacters((characters) => characters.concat(response.results));
      setTotalPages(response.info.pages);
    });
  return { characters, page };
};

export default useFetchData;
