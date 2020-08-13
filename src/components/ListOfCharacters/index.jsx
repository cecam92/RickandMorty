import React, { Fragment, useState, useEffect } from "react";
import "./styles.scss";
import Lista from "./Lista";
import FetchGQL from "./FetchGQL";
import Buried from "../../assests/Buried.jpeg";
import { useSelector, useDispatch } from "react-redux";

function ListOfCaracters() {
  const initCharacters = useSelector((state) => state.characters);
  const initPage = useSelector((state) => state.page);

  const [page, setPage] = useState(initPage);
  const [characters, setCharacters] = useState(initCharacters);

  const dispatch = useDispatch();

  const [totalPages, setTotalPages] = useState(7689);
  const [filter, setFilter] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [error, setError] = useState(false);

  const api = `https://rickandmortyapi.com/api/character/?page=${page}`;

  function getData(url) {
    if (page <= totalPages) {
      try {
        fetch(url)
          .then((res) => res.json())
          .then((response) => {
            setTotalPages(response.info.pages);
            setCharacters((characters) => characters.concat(response.results));
          });
        dispatch({ type: "UPDATE_CHARACTERS", payload: [characters, page] });
      } catch (error) {
        return characters;
      }
    }
  }

  function isScrolling() {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      totalPages > page
    ) {
      setPage(page + 1);
    }
  }

  function inputValue(e) {
    setFilter(e.target.value);
  }

  useEffect(() => {
    getData(api);
    window.addEventListener("scroll", isScrolling);
    return () => {
      window.removeEventListener("scroll", isScrolling);
    };
  }, [page]);

  async function filteredData() {
    if (filter && filter !== undefined && filter !== "") {
      try {
        const char = await FetchGQL(filter);
        if (char) {
          setError(false);
          setFilteredCharacters(char);
        }
      } catch (e) {
        setError(true);
        setFilteredCharacters([]);
      }
    } else {
      setFilteredCharacters([]);
    }
  }
  useEffect(() => {
    filteredData();
  }, [filter]);

  return (
    <Fragment>
      <header className="sticky">
        <div className="Search">
          <input
            className="Search__input"
            placeholder="Write character's name"
            onChange={(e) => {
              inputValue(e);
            }}
          />
        </div>
      </header>
      <main>
        {(!filter || filter === "") && <Lista data={characters} />}
        {filteredCharacters && filter !== "" && (
          <Lista data={filteredCharacters} />
        )}
        {error && filter && (
          <img className="errorImage" src={Buried} alt="No found" />
        )}
      </main>
    </Fragment>
  );
}

export default ListOfCaracters;
