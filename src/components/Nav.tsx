import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import Icon from "./icon";



const NavWrapper = styled.nav`
  line-height:24px;
  box-shadow:0 0 3px rgba(0,0,0,0.25);
  > ul {
    display:flex;
    > li {
      width:33.333%;
      text-align:center;
      padding:16px;
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="tags" />
          <Link to="/tags">Tags</Link>
        </li>
        <li>
          <Icon name="money" />
          <Link to="/money">Money</Link>
        </li>
        <li>
          <Icon name="statistic" />
          <Link to="/statistic">Statistic</Link>
        </li>
      </ul>
    </NavWrapper >
  )
}
export default Nav