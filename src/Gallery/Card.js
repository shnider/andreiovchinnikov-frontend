import React from "react";
import styled from "styled-components";

const PUBLIC_URL = process.env.PUBLIC_URL || '';

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;

  &:hover {
    box-shadow: 0 0 1.025rem 0px rgba(0, 0, 0, .3);
  }
`;

const Wrapper = styled.div`
  cursor: pointer;
  padding: 15px 0px;
`;

export default ({ id }) => (
  <Wrapper>
    <Image src={`${PUBLIC_URL}/image/card-image-${id}.jpg`} />
  </Wrapper>
);

