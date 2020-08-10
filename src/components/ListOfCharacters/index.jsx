import React, { Fragment, useState, useEffect } from "react";
import "./styles.scss";
import Lista from "./Lista";
import FetchGQL from "./FetchGQL";
import Buried from "../../Assests/Buried.jpeg";

// function getCharacters() {
//   const pepito = localStorage.getItem("characters");
//   const data = JSON.parse(pepito);
//   return data;
// }
// function getPage() {
//   const index = localStorage.getItem("page");
//   return index;
// }
function ListOfCaracters() {
  // const localCharacters = () => {
  //   return getCharacters() == null ? [] : getCharacters();
  // };
  // const index = () => {
  //   return getPage() == null ? 1 : parseInt(getPage());
  // };
  const [page, setPage] = useState(1);
  const api = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(7689);
  //const [showBar, setShowBar] = useState(false);
  const [filter, setFilter] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [error, setError] = useState(false);

  function getData(url) {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setCharacters((characters) => characters.concat(response.results));
        setTotalPages(response.info.pages);
      });
  }

  function isScrolling() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    } else {
      if (totalPages > page) {
        setPage(page + 1);
      }
    }
  }
  // function searchBar() {
  //   if (document.documentElement.scrollTop > 50) {
  //     setShowBar(true);
  //   } else {
  //     setShowBar(false);
  //   }
  // }
  function inputValue(e) {
    setFilter(e.target.value);
  }

  useEffect(() => {
    getData(api);
    window.addEventListener("scroll", isScrolling);
    //window.addEventListener("scroll", searchBar);

    return () => {
      window.removeEventListener("scroll", isScrolling);
      // window.removeEventListener("scroll", searchBar);
    };
  }, [api, page]);

  async function filteredData() {
    if (filter && filter !== undefined && filter !== "") {
      try {
        const char = await FetchGQL(filter);
        console.log(` error ${char}`);
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
    console.log(`Characters Filtered : ${filteredCharacters}`);
  }, [filter]);

  console.log(`filter : ${filter}`);

  return (
    <Fragment>
      {/* {(showBar || filter) && ( */}
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
      {/* )} */}{" "}
      <main>
        {(!filter || filter === "") && <Lista data={characters} page={page} />}
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
