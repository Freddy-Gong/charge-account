import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import Tags from 'view/Tags'
import Money from 'view/Money'
import Statistic from 'view/Statistic'
import NoMach from 'view/NoMach'



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/statistic">
          <Statistic />
        </Route>
        <Redirect exact from="/" to="/money" />
        <Route path="*">
          <NoMach />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
