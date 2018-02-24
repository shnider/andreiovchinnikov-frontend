import React from "react";
import styled from "styled-components";

const PUBLIC_URL = process.env.PUBLIC_URL || '';

const Photo = styled.img`
  margin: 0 auto;
  height: 6rem;
  object-fit: contain;
`;

export default () => (
  <div className="container">
    <Photo src={`${PUBLIC_URL}/image/hero.jpg`} />
  </div>
);