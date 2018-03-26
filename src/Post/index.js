import React from "react";
import styled from "styled-components";

const PUBLIC_URL = process.env.PUBLIC_URL || '';

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  padding: 0 0 4rem 0;
`;

const Heading = styled.h2`
  margin-top: 5rem;
  font-family: "Bebas Neue";
  font-weight: bold;
  line-height: 0.85;
  font-size: 1.875rem;
`;

const Description = styled.p`
  
`;

const PostImage = styled.img`
  width: 100%;
  height: 100%;
`;

const mockPosts = [1, 2, 3, 4, 5, 6, 7, 8];

export default ({ match }) => (
  <div className="container">
    <div>
      <Image src={`${PUBLIC_URL}/image/card-image-${match.params.id}.jpg`} />
    </div>
    <div className="row">
      
      <div className="col-md-offset-1 col-md-8">
        <TextWrapper>
          <Heading>Wazzup dance studio</Heading>
          <Description>
          Шрифтовой мюрал в танцвальной студии
          </Description>
        </TextWrapper>
      </div>
      {mockPosts.map(id => <PostImage src={`${PUBLIC_URL}/image/post/${id}.jpg`} />)}
    </div>
  </div>
);
