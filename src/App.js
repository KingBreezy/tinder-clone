import React from "react";
import TinderCards from "./TinderCards";
import "./App.css";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./AddUser";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/adduser">
            <AddUser/>
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
