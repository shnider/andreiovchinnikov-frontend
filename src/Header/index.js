import React from "react";
import styled from "styled-components";

import logo from "./assets/AO_logo.svg";
import telegramm from "./assets/telegramm.svg";
import instagram from "./assets/instagram.svg";
import vk from "./assets/vk.svg";
import facebook from "./assets/facebook.svg";

const Header = styled.header`
  padding: 4rem 0 3rem 0;
`;

const Name = styled.h2`
  position: relative;
  font-family: "Bebas Neue";
  font-weight: bold;
  line-height: 2rem;
  font-size: 1.875rem;
`;

const Logo = styled.img`
  position: absolute;
  top: -16px;
  left: -110px;
  width: 5.7rem;
`;

const Navigation = styled.nav`
  display: flex;  
  padding: 2.5rem 0;
`;

const Link = styled.a`
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
          <Name>
            <Logo src={logo} />
            ANDREY<br />OVCHINNIKOV
          </Name>
        </div>
        <div className="col-md-4">
          <Navigation>
            <Link>portfolio</Link>
            <Link>profile</Link>
          </Navigation>
        </div>
        <div className="col-md-4">
          <Navigation>
            <Link>contact</Link>
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
