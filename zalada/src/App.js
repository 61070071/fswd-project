import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register.js";
import NavBar from "./components/NavBar/NavBar.js";

function App() {
  return (
    <Router>
      <div>
        <NavBar/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
