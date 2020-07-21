import React, { Component } from "react";
import Page from "./components/Page";
import settings from "./settings.json";
import Navigation from "./components/Navigation";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

class App extends Component {
  state = { settings };

  render() {
    const pages = makePages(this.state.settings.pages);
    return (
      <React.Fragment>
        <Navigation settings={this.state.settings} />
        <Router>
          <Switch>
            <Redirect from="/efactory" to="/"></Redirect>
            {pages}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

function makePages(allPages) {
  let pages = allPages.map((page) => (
    <Route exact path={page.link} key={page.id}>
      <Page data={page}></Page>
    </Route>
  ));
  return pages;
}

export default App;
