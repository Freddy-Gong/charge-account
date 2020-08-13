import styled from "styled-components";
import React, { useState } from "react";
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
      > a {font-family: Helvetica;
        font-weight: normal;
        color: #999;
        padding:16px;
        display:flex;
        justify-content:center;
        align-items:center;
        }  
      }
    }
  }
`;

const Nav = () => {
  const [selected, setSelected] = useState<string>('')

  return (
    <NavWrapper>
      <ul >
        <li className={selected === 'Tags' ? 'active' : ''} onClick={() => {
          setSelected('Tags')
        }}>
          <NavLink to="/tags" >
            <Icon name="tags" />
            Tags</NavLink>
        </li >
        <li className={selected === 'Money' ? 'active' : ''} onClick={() => {
          setSelected('Money')
        }}>
          <NavLink to="/money" >
            <Icon name="money" />
            Money</NavLink>
        </li>
        <li className={selected === 'Statistic' ? 'active' : ''}
          onClick={() => {
            setSelected('Statistic')
          }}>
          <NavLink to="/statistic" >
            <Icon name="statistic" />
            Statistic</NavLink>
        </li>
      </ul>
    </NavWrapper >
  )
}
export default Nav