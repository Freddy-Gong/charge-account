import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import styled from 'styled-components';

const Wrapper = styled.div`
  border:1px solid red;
  height:100vh;
  display:flex;
  flex-direction:column;
`;
const Main = styled.div`
  flex-grow:1;
`
const Nav = styled.nav`
  > ul {
    display:flex;
    > li {
      width:33.333%;
      text-align:center;
      padding:16px;
    }
  }
`
function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav>
          <ul>
            <li>
              <Link to="/tags">Tags</Link>
            </li>
            <li>
              <Link to="/money">Money</Link>
            </li>
            <li>
              <Link to="/statistic">Statistic</Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Router>
  );
}

function Tags() {
  return <h2>标签</h2>
}
function Money() {
  return <h2>记账</h2>
}
function Statistic() {
  return <h2>统计</h2>
}
function NoMach() {
  return <h2>输入路径不存在</h2>
}

export default App;
