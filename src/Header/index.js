import React from "react";
import styled from "styled-components";

import logo from "./assets/AO_logo.svg";
import telegramm from "./assets/telegramm.svg";
import instagram from "./assets/instagram.svg";
import vk from "./assets/vk.svg";
import facebook from "./assets/facebook.svg";

const Header = styled.header`
  padding: 4rem 0;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Name = styled.h2`
  position: relative;
  font-family: "Bebas Neue";
  font-weight: bold;
  line-height: 1.6rem;
  font-size: 1.5rem;
`;

const Logo = styled.img`
  position: absolute;
  top: -15px;
  left: -90px;
  width: 4.5rem;
`;

const Navigation = styled.nav`
  padding: 1.75rem 0;
`;

const Link = styled.a`
  cursor: pointer;
  position: relative;
  font-family: "Bebas Neue";
  font-weight: bold;
  line-height: 1.6rem;
  font-size: 1.5rem;
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
  padding-right: 2rem;
  width: 1.1rem;
`;

const Icons = styled.div`
  padding-top: 1.75rem;
`;

const About = styled.p`
  line-height: 1.25rem;
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
        <div className="col-md-8">
          <Wrapper>
            <Navigation>
              <Link>portfolio</Link>
              <Link>profile</Link>
              <Link>contact</Link>
            </Navigation>
            <Icons>
              <Icon src={facebook} />
              <Icon src={vk} />
              <Icon src={telegramm} />
              <Icon src={instagram} />
            </Icons>
          </Wrapper>
        </div>
      </div>
      <About>
        Многопрофильный художник и дизайнер с акцентом на индивидуальный <br />
        брендинг и типографию.
      </About>
    </div>
  </Header>
);
