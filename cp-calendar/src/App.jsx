// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import Platforms from './pages/Platforms';
import './App.css'; // Add some basic styles here

const App = () => (
  <Router>
    <div className="app">
      <h1>Contest Calendar</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/platforms">Platforms</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/platforms" component={Platforms} />
      </Switch>
    </div>
  </Router>
);

export default App;
