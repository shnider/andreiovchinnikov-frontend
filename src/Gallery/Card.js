import React from "react";
import styled from "styled-components";

const PUBLIC_URL = process.env.PUBLIC_URL || '';

const Wrapper = styled.div`
  padding: 15px 0px;
`;

const Card = styled.a`
  display: block;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;
  background-image: url(${props => `${PUBLIC_URL}/image/card-image-${props.id}.jpg`});
  color: white;  
  text-decoration: none;
`;

const Back = styled.span`
  opacity: 0;
  display: flex;
  background-color: rgba(6,6,6,0.85);
  width: 100%;
  height: 100%;
  align-items: center;
  transition: all .15s ease-in-out 0s;

  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h2`
  margin: 0 auto;
  font-size: 1rem;
  font-weight: normal;
`;

export default ({ id }) => (
  <Wrapper>
    <Card id={id}>
      <Back>
        <Title>Логотип</Title>
      </Back>
    </Card>
  </Wrapper>
);
