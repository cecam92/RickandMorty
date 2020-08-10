import React, { Fragment, useState, useEffect } from "react";
import "./styles.scss";
import CharacterCard from "../CharacterCard";
import { Link } from "react-router-dom";
import FilteredList from "./FilteredList";
import useWithRest from "./useWithRest";
//import useFetchData from "../hooks/useFetchData";

// function saveInLocal(cards, index) {
//   localStorage.setItem("characters", JSON.stringify(cards));
//   localStorage.setItem("page", index);
// }
// function getCharacters() {
//   const pepito = localStorage.getItem("characters");
//   const data = JSON.parse(pepito);
//   return data;
// }
// function getPage() {
//   const index = localStorage.getItem("page");
//   return index;
// }
////////////////////////////////////////////

function ListOfCaracters() {
  // const localCharacters = () => {
  //   return getCharacters() == null ? [] : getCharacters();
  // };
  // const index = () => {
  //   return getPage() == null ? 1 : parseInt(getPage());
  // };

  // const [showBar, setShowBar] = useState(false);

  // const [filter, setFilter] = useState("");
  // const [filtered, setFiltered] = useState([]);

  const [page, setPage] = useState(1);
  const { characters, totalPages } = useWithRest(page);

  function isScrolling() {
    const offsetOnMain = 100;
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight + offsetOnMain
    ) {
      return;
    } else {
      if (page < totalPages) {
        setPage(page + 1);
        console.log(page);
      }
    }
  }
  // function Searchbar() {
  //   if (document.documentElement.scrollTop > 143) {
  //     setShowBar(true);
  //   } else {
  //     setShowBar(false);
  //     setFilter("");
  //   }
  // }
  // function getFilterArray() {
  //   return setFiltered(FilteredList(filter));
  // }
  // function chad() {
  //   if (filter !== "") {
  //     setFiltered([
  //       {
  //         id: 1,
  //         name: "Rick Sanchez",
  //         status: "Alive",
  //         origin: "Earth",
  //         type: "",
  //       },
  //       {
  //         id: 2,
  //         name: "Morty Smith",
  //         status: "Alive",
  //         origin: "Earth",
  //         type: "",
  //       },
  //     ]);
  //   }
  // }
  //console.log(filter);
  //console.log(filtered);

  // useEffect(() => {
  //   window.addEventListener("scroll", Searchbar);
  //   //chad();
  //  // getFilterArray();
  //   if (filtered !== "") {
  //     setShowBar(true);
  //     document.documentElement.scrollTop = 143;
  //   }
  //   return () => {
  //     window.removeEventListener("scroll", Searchbar);
  //     setShowBar(false);
  //   };
  // }, [filter]);

  useEffect(() => {
    // saveInLocal(characters, page);
    window.addEventListener("scroll", isScrolling);
    //  window.addEventListener("scroll", Searchbar);
    return () => {
      window.removeEventListener("scroll", isScrolling);
      //window.removeEventListener("scroll", Searchbar);
      //setShowBar(false);
    };
  }, [page]);

  // function inputValue(e) {
  //   setFilter(e.target.value);
  // }

  return (
    <Fragment>
      <main>
        {/* {showBar && (
          <header className="sticky">
            <div className="Search">
              <input
                className="Search__input"
                placeholder="search by caracter o Id"
                onChange={inputValue}
              />
            </div>
          </header>
        )} */}
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
}

export default ListOfCaracters;
//console.log(`FetchGQL  ${props}`);
// const characters = [
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     origin: "Earth",
//     type: "",
//   },
//   {
//     id: 2,
//     name: "Morty Smith",
//     status: "Alive",
//     origin: "Earth",
//     type: "",
//   },
// ];
