import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

import logo from "./assets/AO_logo.svg";

const Hero = styled(Link)`
  display: block;
`;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${({ isPortfolio }) => isPortfolio ? "4rem 0 2rem 0" : "4rem 0 3rem 0"};
`;

const Name = styled.h2`
  display: inline-block;
  vertical-align: 26px;
  margin: 0;
  padding-left: 1.1rem;
  font-family: "Bebas Neue";
  font-weight: bold;
  line-height: 1.5rem;
  font-size: 1.4rem;
  color: #000;
`;

const Logo = styled.img`
  width: 4rem;
  padding: .9rem 0;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`;

const Nav = styled(Link)`
  margin-right: 2rem;
  font-family: "Bebas Neue";
  font-weight: bold;
  font-size: 1.4rem;
  color: ${({ isActive }) => isActive ? "#636363" : "#000"};
  text-decoration: none;
  transition: all .15s;

  &:hover {
    color: #636363;
  }

`;

const Svg = styled.svg`
  width: 18px;
  height: 18px;
  fill: #000;
  transition: all .15s;
  margin-left: 1.4rem;

  &:hover {
    fill: #636363;
  }
`;

const Header = ({ location: { pathname } }) => (
  <div className="container">
    <Wrapper isPortfolio={pathname === "/portfolio"}>
      <Hero to="/portfolio">
        <Logo src={logo} />
        <Name>
          ANDREI<br />OVCHINNIKOV
        </Name>
      </Hero>
      <Navigation>
        <Nav
          isActive={pathname === "/portfolio"}
          to="/portfolio"
        >
          portfolio
        </Nav>
        <Nav
          isActive={pathname === "/profile"}
          to="/profile"
        >
          profile
        </Nav>
        <Nav
          isActive={pathname === "/contact"}
          to="/contact"
        >
          contact
        </Nav>
        <div>
          <a href="https://ru-ru.facebook.com">
            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" /></Svg>
          </a>
          <a href="https://www.instagram.com/andreiovchinnikov">
            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.25 16.996h-2.134c-1.205 0-1.409-.687-2.401-1.679-.897-.897-1.395-.209-1.374 1.068.006.339-.161.611-.566.611-1.264 0-3.08.178-4.918-1.806-1.883-2.033-3.857-6.111-3.857-6.513 0-.237.196-.344.524-.344h2.17c.574 0 .623.284.783.649.667 1.521 2.265 4.574 2.69 2.87.244-.978.344-3.245-.703-3.44-.594-.11.452-.746 1.968-.746.377 0 .786.041 1.205.137.769.179.771.523.761 1.026-.039 1.903-.269 3.184.233 3.507.479.31 1.739-1.717 2.403-3.281.183-.433.219-.722.734-.722h2.654c1.39 0-.182 1.997-1.383 3.557-.968 1.255-.916 1.28.209 2.324.803.744 1.75 1.76 1.75 2.336.002.272-.21.446-.748.446z" /></Svg>
          </a>
          <a href="https://t.me/andreiovchinnikov">
            <Svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,24l-14,0c-2.761,0 -5,-2.239 -5,-5l0,-14c0,-2.761 2.239,-5 5,-5l14,0c2.762,0 5,2.239 5,5l0,14c0,2.761 -2.238,5 -5,5Zm-2.744,-5.148c0.215,0.153 0.491,0.191 0.738,0.097c0.246,-0.093 0.428,-0.304 0.483,-0.56c0.579,-2.722 1.985,-9.614 2.512,-12.09c0.039,-0.187 -0.027,-0.381 -0.173,-0.506c-0.147,-0.124 -0.351,-0.16 -0.532,-0.093c-2.795,1.034 -11.404,4.264 -14.923,5.567c-0.223,0.082 -0.368,0.297 -0.361,0.533c0.008,0.235 0.167,0.44 0.395,0.509c1.578,0.471 3.65,1.128 3.65,1.128c0,0 0.967,2.924 1.472,4.41c0.063,0.187 0.21,0.334 0.402,0.384c0.193,0.05 0.397,-0.002 0.541,-0.138c0.811,-0.765 2.064,-1.948 2.064,-1.948c0,0 2.381,1.746 3.732,2.707Zm-7.34,-5.784l1.119,3.692l0.249,-2.338c0,0 4.324,-3.9 6.79,-6.124c0.072,-0.065 0.082,-0.174 0.022,-0.251c-0.06,-0.077 -0.169,-0.095 -0.251,-0.043c-2.857,1.825 -7.929,5.064 -7.929,5.064Z" /></Svg>
          </a>
          <a href="https://www.instagram.com/andreiovchinnikov">
            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" /></Svg>
          </a>
        </div>
      </Navigation>
    </Wrapper>
  </div>
);

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default withRouter(Header);