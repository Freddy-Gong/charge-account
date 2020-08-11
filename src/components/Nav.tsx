import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
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
        &.selected{
          color:red;
          .icon{
            fill:red;
          }
        }  
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tags" />
            Tags</NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money" />
            Money</NavLink>
        </li>
        <li>
          <NavLink to="/statistic" activeClassName="selected">
            <Icon name="statistic" />
            Statistic</NavLink>
        </li>
      </ul>
    </NavWrapper >
  )
}
export default Nav