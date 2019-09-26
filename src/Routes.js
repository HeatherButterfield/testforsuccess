import React from "react";
import { Route, Switch } from "react-router-dom";

import ColorPage from "./pages/ColorPage";
import HomePage from "./pages/HomePage";


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/color" component={ColorPage} />

        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
