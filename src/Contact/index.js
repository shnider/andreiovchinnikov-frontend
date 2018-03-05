import React, { Component } from "react";
import styled from "styled-components";

const Heading = styled.h2`
  margin: 0;
  font-family: "Bebas Neue";
`;

const Greeting = styled.p`
  margin-top: .3rem;
  margin-bottom: 0;
`;

const Title = styled.div`
  padding-top: 1.3rem;
  padding-bottom: .6rem;
  font-size: .9rem;
`;

const Form = styled.form`
  padding-right: 1rem;
`;

const Field = styled.input`
  width: ${({ isName }) => isName ? "90%" : "100%"};
  padding: .5rem;
  font-size: .8rem;
  border: 1px solid #ccc;
  border-radius: 1px;
  background-color: #f7f7f7;

  &:focus {
    background-color: #fff;
  }
`;

const Message = styled.textarea`
  width: 100%;
  padding: .5rem;
  font-size: .8rem;
  height: 6rem;
  border: 1px solid #ccc;
  border-radius: 1px;
  background-color: #f7f7f7;

  &:focus {
    background-color: #fff;
  }
`;

const Legend = styled.label`
  font-size: .7rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubName = styled.div`
  width: 50%;
`;

const SubmitWrapper = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 3rem;
`;

const Submit = styled.button`
  padding: .5rem;
  font-size: .8rem;
  background-color: #f7f7f7;
  border: 1px solid #000;
  border-radius: 1px;

  &:hover{
    background-color: #000;
    color: #fff;
  }
`;

const TextWrapper = styled.div`
 
`;

const Text = styled.p`
  margin-top: .3rem;
  margin-bottom: 1.5rem;
`;

const Feedback = () => (
  <Form>
    <Title>Полное имя</Title>
    <Wrapper>
      <SubName>
        <Legend htmlFor="first-name">
          <Field
            isName
            name="first-name"
          />
          Имя
        </Legend>
      </SubName>
      <SubName>
        <Legend htmlFor="last-name">
          <Field
            name="last-name"
          />
          Фамилия
        </Legend>
      </SubName>
    </Wrapper>
    <Title>Электронная почта</Title>
    <Legend htmlFor="email">
      <Field
        name="email"
      />
    </Legend>
    <Title>Сообщение</Title>
    <Message />
    <SubmitWrapper>
      <Submit type="submit">Отправить</Submit>
    </SubmitWrapper>
  </Form>
);

export default class Contact extends Component  {
  state = {};

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Heading>Обратная связь</Heading>
            <Greeting>Если у Вас возникли какие либо вопросы, свяжитесь со мной:</Greeting>
            <Feedback />
          </div>
          <div className="col-md-offset-1 col-md-4">
            <TextWrapper>
              <Heading>Электронная почта</Heading>
              <Text>andreiochinnikov@gmail.com</Text>
              <Heading>Локация</Heading>
              <Text>Россия / Вологда</Text>
            </TextWrapper>
          </div>
        </div>
      </div>
    );
  }
}