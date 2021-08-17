import React from "react";
import Login from "./components/Login";
import Todo from "./components/Todo";
import Home from "./components/Home";
import "./App.css";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/todo" component={Todo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
