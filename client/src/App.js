import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage.js';
import Login from './components/Auth/Login.js';
import Register from './components/Auth/Register.js';
import TinderCards from './components/Cards/TinderCards.js';
import Header from './components/Header.js';
import Feed from './components/Posts/Feed.js';
import Profile from './components/Profile.js';
import Test from './components/Test.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/feed">
            <Header />
            <Feed />
          </Route>
          <Route path = "/tinderCards">
            <Header />
            <TinderCards />
          </Route>
          <Route path = "/login">
            <Login />
          </Route>
          <Route path = "/register">
            <Register />
          </Route>
          <Route path = "/profile">
          <Header />
            <Profile />
          </Route>
          <Route path = "/test">
            <Test />
          </Route>
          <Route path = "/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
