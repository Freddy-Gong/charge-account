import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import Layout from 'components/layout';




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

function Tags() {
  return (<Layout>
    <h2>标签</h2>
  </Layout>
  )
}
function Money() {
  return (
    <Layout>
      <h2>记账</h2>
    </Layout>
  )
}
function Statistic() {
  return (
    <Layout>
      <h2>统计</h2>
    </Layout>
  )
}
function NoMach() {
  return <h2>输入路径不存在</h2>
}

export default App;
