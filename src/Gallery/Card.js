import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PUBLIC_URL = process.env.PUBLIC_URL || '';

const Wrapper = styled.div`
  padding-bottom: 1rem;
`;

const Card = styled(Link)`
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

const Back = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  background-color: rgba(6,6,6,0.85);
  width: 100%;
  height: 100%;
  transition: all .15s ease-in-out 0s;

  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h2`
  font-family: "Bebas Neue";
  margin: 0 auto;
  font-size: 1.2rem;
`;

const Description = styled.p`
  font-size: .8rem;
  margin: .3rem 0;
`;

export default ({ id }) => (
  <Wrapper>
    <Card to={`/posts/${id}`} id={id}>
      <Back>
        <div>
          <Title>Wazzup dance studio</Title>
          <Description>Шрифтовой мюрал в танцвальной студии</Description>
        </div>
      </Back>
    </Card>
  </Wrapper>
);
