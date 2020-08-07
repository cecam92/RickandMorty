import React, { Fragment, useState, useEffect } from "react";
import "./styles.scss";
import FilteredList from "../ListOfCharacters/FilteredList";

function SearchBar() {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    //FilteredList(filter);
  }, [filter]);
  // console.log(filter);

  return (
    <Fragment>
      <header className="sticky">
        <div className="Search">
          <input
            className="Search__input"
            placeholder="search by caracter o Id"
            // onChange={(e) => {
            //   setFilter(e.target.value);
            // }}
          />
        </div>
      </header>
    </Fragment>
  );
}

export default SearchBar;
