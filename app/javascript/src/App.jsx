import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Posts from "./components/Posts";
import routes from "./routes";

const App = () => (
  <Router>
    <Switch>
      <Route exact component={Posts} path={routes.root} />
    </Switch>
  </Router>
);

export default App;
