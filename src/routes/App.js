import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home/index";
import Character from "../containers/Character/index";
import FirstPage from "../containers/FirstPage";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route exact path="/characters" component={Home} />
        <Route exact path="/characters/:characterId" component={Character} />
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
