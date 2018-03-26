import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem 0;
`;

const TagFilter = styled.a`
  margin-right: .7rem;
  font-size: .8rem;
  font-weight: bold;
  color: ${({ isActive }) => isActive ? "#636363" : "#000"};
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  transition: all .15s;

  &:hover {
    color: #636363;
  }
`;

const All = styled.div`
  max-height: ${({ isOpen }) => isOpen ? "3rem" : "0"};
  padding: ${({ isOpen }) => isOpen ? ".3rem 0" : "0"};
  opacity: ${({ isOpen }) => isOpen ? "1" : "0"};
  overflow: hidden;
  will-change: opacity, max-height, padding;
  transition: all .2s;
`;

const Tag = styled.span`
  font-size: .8rem;
  color: ${({ isActive }) => isActive ? "#636363" : "#000"};
  cursor: pointer;
  user-select: none;

  &::after {
    content: "${({ last }) => !last ? " / " : ""}";
  }
`;

export default class Tags extends Component {
  state = { 
    filter: "all",
    active: new Set()
  };

  handleTagFilterClick = ({ target: { name } }) => {
    this.setState({
      filter: name,
      active: new Set()
    });
  };

  handleToggleTag = tag => {
    const { active } = this.state;

    const newActive =  new Set(active);
    newActive.has(tag) ? newActive.delete(tag) : newActive.add(tag);

    this.setState({
      active: newActive
    });
  };

  render() {
    const { filter, active } = this.state;

    return(
      <div>
        <Wrapper>
          <TagFilter
            name="all"
            isActive={filter === "all"}
            onClick={this.handleTagFilterClick}
          >
          Все
          </TagFilter>
          <TagFilter
            name="type"
            isActive={filter === "type"}
            onClick={this.handleTagFilterClick}
          >
            Фильтр
          </TagFilter>
          <All isOpen={filter === "type"}>
            <Tag
              isActive={active.has("logo")}
              onClick={() => this.handleToggleTag("logo")}
            >
              Лого
            </Tag>
            <Tag
              isActive={active.has("wall")}
              onClick={() => this.handleToggleTag("wall")}
            >
              Стены
            </Tag>
            <Tag
              isActive={active.has("cgph")}
              onClick={() => this.handleToggleTag("cgph")}
              last
            >
              Каллиграфия
            </Tag>
          </All>
        </Wrapper>
      </div>
    )
  }
}