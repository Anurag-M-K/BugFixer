/* eslint-disable linebreak-style */
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router,  Route,  Redirect, Switch} from 'react-router-dom';
import BugFixer from './components/BugFixer';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route excact path="/" component={BugFixer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
