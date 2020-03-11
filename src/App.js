import React from "react";
import "./App.css";
import Header from "./components/Header";
import Add from "./pages/Add";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Vote from "./pages/Vote";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Add />
          </Route>
          <Route path="/vote">
            <Vote />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
