import React, { Component } from "react";
import styled from "styled-components";

import expand from "./expand-button.svg";


const ButtonWrapper = styled.div`
  text-align: right;
`;

const Expand = styled.button`
  padding: 1rem;
  border: none;
  background: transparent;
  color: #000;
  cursor: pointer;

  ::after {
    content: '';
    background: url(${expand});
    background-size: 1rem 1rem;
    margin-left: 0.5rem;
    background-size: contain;
    width: 0.75rem;
    height: 0.375rem;
  }
`;



export default class Tags extends Component {
  state = { 
    isOpen: false
  };

  render() {
    const { isOpen } = this.state;

    return(
      <div>
        <ButtonWrapper>
          <Expand>Test</Expand>
          <img src={expand} />
        </ButtonWrapper>
      </div>
    )
  }
}