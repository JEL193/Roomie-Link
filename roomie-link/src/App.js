import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';

function App() {
  return (
    <div className="App"> 
{/*header*/}
    <Header />
        <Router >
          <Switch>
            <Route path = "/t">
              <h1>I am chatpage</h1>
            </Route>
            <Route path = "/">
              <TinderCards />
            </Route>

          </Switch>
        </Router>



    </div>
  );
}

export default App;
