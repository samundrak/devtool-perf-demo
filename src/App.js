import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import ShoppingSiteFast from './ShoppingSiteFast';
import ConsoleErrorPage from './ConsoleErrorPage';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/fast-shopping-site">Fast Shopping Site</Link>
        <br />
        <Link to="/ConsoleErrorPage">Console Error Page</Link>
        <hr />
        <Route exact path="/fast-shopping-site" component={ShoppingSiteFast} />
      </div>
    );
  }
}

export default App;
