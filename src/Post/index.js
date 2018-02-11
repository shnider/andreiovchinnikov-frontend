import React from "react";
import styled from "styled-components";

import post1 from "../image/1.jpg";
import post2 from "../image/2.jpg";

const PUBLIC_URL = process.env.PUBLIC_URL || '';

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  padding-left: 1rem;
`;

const Heading = styled.h2`
  margin-top: 0;
  font-family: "Bebas Neue";
  font-weight: bold;
  line-height: 0.85;
  font-size: 1.875rem;
`;

const Description = styled.p`
  text-indent: 2rem;
`;

const PostImage = styled.img`
  padding: 3rem .5rem 2rem .5rem;
  width: 100%;
  height: 100%;
`;

export default ({ match }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <Image src={`${PUBLIC_URL}/image/card-image-${match.params.id}.jpg`} />
      </div>
      <div className="col-md-6">
        <TextWrapper>
          <Heading>lalalalal</Heading>
          <Description>
          Присылай нам фото, картинку или иллюстрацию,а мы добавим к ним каллиграфию или нарисуем надпись на твой вкус. Затем картинка вместе с буквами будет доработана в Фотошопе и отправлена на печать.
  Ты получишь свое изображение натянутым на холст и готовым быть подаренным или повешенным на стену.
  Слова, цитаты из книг или песен, интересные или красивые высказывания отлично могут дополнить изображение. Добавить картинке настроение и атмосферу или рассказать историю. 
  В альбомах группы можно посмотреть готовые работы. 
  Если возникнут вопросы или предложения - обращайся к администратору сообщества.
          </Description>
        </TextWrapper>
      </div>
      <PostImage src={post1} />
      <PostImage src={post2} />
    </div>
  </div>
);
