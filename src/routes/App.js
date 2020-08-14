import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home/index";
import Character from "../containers/Character/index";
import FirstPage from "../containers/FirstPage";
import NotFound from "../containers/NotFound";
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route exact path="/characters/" component={Home} />
        <Route exact path="/characters/:characterId" component={Character} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
