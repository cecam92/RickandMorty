import React, { Fragment } from "react";

import "./styles.scss";
function NotFound() {
  return (
    <Fragment>
      <main>
        <div className="listCharacter-errorImage-container">
          <h2>404: Ooops! we buried them</h2>
        </div>
      </main>
    </Fragment>
  );
}
export default NotFound;
