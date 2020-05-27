import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Portfolio from '../src/components/Pages/Portfolio';

function App() {
  return (
    <>
      <Portfolio></Portfolio>
      <Router>
        <Switch>
          <Route exact path='/'/>
        </Switch>
      </Router>

    </>
  );
}

export default App;
