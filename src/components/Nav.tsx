import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "./icon";


const NavWrapper = styled.nav`
  line-height:24px;
  > ul {
    display:flex;
    > li {
      width:33.333%;
      text-align:center;
      border-radius:37px;
      margin:0 8px;
      background: linear-gradient(135deg,rgba(230,230,230,1) 0%,rgba(246,246,246,1) 100%);
      box-shadow: -4px -4px 10px -8px rgba(255,255,255,1), 4px 4px 10px -8px rgba(0, 0, 0, .3);
      &.active{
        box-shadow: -4px -4px 10px -8px rgba(255,255,255,1) inset, 4px 4px 10px -8px rgba(0, 0, 0, .3) inset;
      }
      > a {
        font-family: Helvetica;
        font-weight: normal;
        color: #999;
        padding:16px;
        display:flex;
        justify-content:center;
        align-items:center;
        &.selected{
          box-shadow: -4px -4px 10px -8px rgba(255,255,255,1) inset, 4px 4px 10px -8px rgba(0, 0, 0, .3) inset;
          border-radius:37px;
        }
        }  
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul >
        <li
        >
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tags" />
            Tags</NavLink>
        </li >
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money" />
            Money</NavLink>
        </li>
        <li >
          <NavLink to="/statistic" activeClassName="selected">
            <Icon name="statistic" />
            Statistic</NavLink>
        </li>
      </ul>
    </NavWrapper >
  )
}
export default Nav