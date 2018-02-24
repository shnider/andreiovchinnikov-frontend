import React from "react";
import styled from "styled-components";

const PUBLIC_URL = process.env.PUBLIC_URL || '';

const Photo = styled.img`
  margin: 0 auto;
  padding-bottom: 3rem;
  width: 100%;
`;

const Heading = styled.h2`
  font-family: "Bebas Neue";
`;

const About = styled.p`
  padding-bottom: 9rem;
`;

const TextWrapper = styled.div`
  padding: 0 2rem;
  border-left: ${({ isBorder }) => isBorder ? "2px solid #000" : "none"};
`;

const SkillsList = styled.dl`
  display: flex;
`;

const Skill = styled.dt`
  flex-basis: 10%;
`;

const Description = styled.dd`
  flex-basis: 90%;
  color: #636363;
`;

export default () => (
  <div className="container">
    <Photo src={`${PUBLIC_URL}/image/hero.jpg`} />
    <div className="row">
      <div className="col-md-7">
        <TextWrapper>
          <Heading>
            Профиль
          </Heading>
          <About>
  Меланхолик, согласно традиционным представлениям, выстраивает суггестивный метод кластерного 
  анализа, именно об этом комплексе движущих сил писал З.Фрейд 
  в теории сублимации. Сублимация вызывает глубокий структурализм. Онтогенез монотонно диссонирует эдипов комплекс. Искусство, на первый взгляд, иллюстрирует определенный маньеризм. Развивая эту тему, типическое иллюстрирует экзистенциализм. Восприятие сотворчества, на первый взгляд, трансформирует структурализм.
  Развивая эту тему, идея (пафос) монотонно трансформирует конструктивный онтологический статус искусства. Онтологический статус искусства неустойчив. Структурализм, по определению, просветляет синтез 
  искусств, 
  однако само по себе состояние игры всегда амбивалентно.
  Притча монотонно продолжает мимезис. Иными словами, принцип 
  артистизма монотонно представляет собой комплекс агрессивности. Общекультурный цикл имитирует метод кластерного 
  анализа.
          </About>
        </TextWrapper>
      </div>
      <div className="col-md-5">
        <TextWrapper isBorder>
          <Heading>
            Навыки
          </Heading>
          <SkillsList>
            <Skill>
              Графический дизайнер
            </Skill>
            <Description>
              Editorial Design, Book & Magazine Design, Marketing Collateral, Illustration
            </Description>
          </SkillsList>
          <SkillsList>
            <Skill>
              Графический дизайнер
            </Skill>
            <Description>
              Editorial Design, Book & Magazine Design, Marketing Collateral, Illustration
            </Description>
          </SkillsList>
          <SkillsList>
            <Skill>
              Графический дизайнер
            </Skill>
            <Description>
              Editorial Design, Book & Magazine Design, Marketing Collateral, Illustration
            </Description>
          </SkillsList>
          <SkillsList>
            <Skill>
              Графический дизайнер
            </Skill>
            <Description>
              Editorial Design, Book & Magazine Design, Marketing Collateral, Illustration
            </Description>
          </SkillsList>
        </TextWrapper>
      </div>
    </div>
  </div>
);