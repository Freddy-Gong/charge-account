import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
require('icon/money.svg')
require('icon/tags.svg')
require('icon/statistic.svg')



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
          <svg className="icon">
            <use xlinkHref="#tags" />
          </svg>
          <Link to="/tags">Tags</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#money" />
          </svg>
          <Link to="/money">Money</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#statistic" />
          </svg>
          <Link to="/statistic">Statistic</Link>
        </li>
      </ul>
    </NavWrapper >
  )
}
export default Nav