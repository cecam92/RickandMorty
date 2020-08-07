import React, { useState, useEffect } from "react";
import "./styles.scss";

function useWithRest(index) {
  const [page, setPage] = useState(index);
  const api = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState("");

  function getData(url) {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setCharacters(response.results);
        setTotalPages(response.info.pages);
      });
  }

  useEffect(() => {
    getData(api);
  }, []);

  return characters;
}

export default useWithRest;
