import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import '../icon.svg'


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
          <Link to="/tags">Tags</Link>
        </li>
        <li>
          <Link to="/money">Money</Link>
        </li>
        <li>
          <Link to="/statistic">Statistic</Link>
        </li>
      </ul>
    </NavWrapper >
  )
}
export default Nav