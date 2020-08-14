import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Tags from 'view/Tags'
import Money from 'view/Money'
import Statistic from 'view/Statistic'
import NoMach from 'view/NoMach'
import Tag from 'view/Tag';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/tags/:tag">
          <Tag />
        </Route>
        <Route exact path="/tags">
          <Tags />
        </Route>
        <Route exact path="/money">
          <Money />
        </Route>
        <Route exact path="/statistic">
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
