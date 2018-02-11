import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "./assets/AO_logo.svg";
import telegramm from "./assets/telegramm.svg";
import instagram from "./assets/instagram.svg";
import vk from "./assets/vk.svg";
import facebook from "./assets/facebook.svg";

const Header = styled.header`
  padding: 4rem 0 3rem 0;
`;

const Name = styled.h2`
  display: inline-block;
  vertical-align: 18px;
  margin: 0;
  padding-left: 1.1rem;
  display: inline-block;
  font-family: "Bebas Neue";
  font-weight: bold;
  line-height: 2rem;
  font-size: 1.875rem;
  color: #000;
`;

const Logo = styled.img`
  width: 5.7rem;
`;

const Navigation = styled.nav`
  display: flex;  
  padding: 2.5rem 0;
`;

const Nav = styled.a`
  cursor: pointer;
  position: relative;
  font-family: "Bebas Neue";
  font-weight: bold;
  line-height: 1.6rem;
  font-size: 1.875rem;
  margin-right: 7rem;
  color: #000;
  text-transform: uppercase;
  text-decoration: none;
  transition: all .15s;

  &:hover {
    color: #636363;
  }
`;

const Icon = styled.img`
  padding-left: 1.5rem;
  width: 1.35rem;
`;

const Icons = styled.div`
  
`;

export default () => (
  <Header>
    <div className="container">
      <div className="row">    
        <div className="col-md-4">
          <Link to="/">
            <Logo src={logo} />
            <Name>
              ANDREI<br />OVCHINNIKOV
            </Name>
          </Link>
        </div>
        <div className="col-md-4">
          <Navigation>
            <Nav>portfolio</Nav>
            <Nav>profile</Nav>
          </Navigation>
        </div>
        <div className="col-md-4">
          <Navigation>
            <Nav>contact</Nav>
            <Icons>
              <Icon src={facebook} />
              <Icon src={vk} />
              <Icon src={telegramm} />
              <Icon src={instagram} />
            </Icons>
          </Navigation>
        </div>
      </div>
      
    </div>
  </Header>
);
