import React, { Fragment, useState } from "react";
import "./styles.scss";
import Scrolling from ".";
function ListOfCaracters() {
  const [pages, setPages] = useState(1);
  return (
    <Fragment>
      <p onClick={() => setPages(pages + 1)}>outside</p>
      <Scrolling pages={pages} />
    </Fragment>
  );
}

export default ListOfCaracters;
