import React from "react";
import styled from "styled-components";

import logo from "./assets/AO_logo.svg";
import behance from "./assets/behance.svg";
import instagram from "./assets/instagram.svg";

const Header = styled.header`
  border-top: 1px solid;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 10rem;
`;

const Navigation = styled.nav`
  vertical-align: bottom;
`;

const Link = styled.a`
  margin-left: 2rem;
  color: #000;
  text-decoration: none;

  &:hover {
    color: #636363;
  }
`;

const Icon = styled.img`
  width: 1.25rem;
  vertical-align: -4px;
`;

const About = styled.p``;

export default () => (
  <Header>
    <div className="container">
      <Wrapper>
        <Logo src={logo} />
        <Navigation>
          <Link href="#">Портфолио</Link>
          <Link href="#">Профиль</Link>
          <Link href="#">Контакты</Link>
          <Link href="#">
            <Icon src={behance} />
          </Link>
          <Link href="#">
            <Icon src={instagram} />
          </Link>
        </Navigation>
      </Wrapper>
      <About>
        Многопрофильный художник и дизайнер с акцентом на индивидуальный <br />
        брендинг и типографию.
      </About>
    </div>
  </Header>
);
