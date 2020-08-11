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
      > a {
        padding:16px;
        display:flex;
        justify-content:center;
        align-items:center;  
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">
            <Icon name="tags" />
            Tags</Link>
        </li>
        <li>
          <Link to="/money">
            <Icon name="money" />
            Money</Link>
        </li>
        <li>
          <Link to="/statistic">
            <Icon name="statistic" />
            Statistic</Link>
        </li>
      </ul>
    </NavWrapper >
  )
}
export default Nav