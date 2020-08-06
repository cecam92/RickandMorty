import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home/index";
import Character from "../containers/Character/index";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:characterId" component={Character} />
        <Route
          component={() => {
            return <p>404: No found </p>;
          }}
        />
      </Switch>
    </HashRouter>
  );
}

export default App;
