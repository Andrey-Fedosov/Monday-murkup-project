import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

type SkillItemPropsType = {
  skillItemTitle?: string;
  skiliItemLogo?: string;
};

export function SkillsBox() {
  return (
    <StyledSkills>
      <SkillItem skillItemTitle="HTML5" skiliItemLogo="codeSVG" />
      <SkillItem skillItemTitle="CSS3" skiliItemLogo="cssSVG" />
      <SkillItem skillItemTitle="FIGMA" skiliItemLogo="figmaSVG" />
      <SkillItem skillItemTitle="REACT" skiliItemLogo="reactSVG" />
      <SkillItem skillItemTitle="STYLE COMPONENTS" skiliItemLogo="stCompSVG" />
      <SkillItem skillItemTitle="TYPESCRIPT" skiliItemLogo="typescriptSVG" />
    </StyledSkills>
  );
}

const StyledSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  background-color: #ffffb0;
  min-height: 100vh;
`;

function SkillItem(props: SkillItemPropsType) {
  return (
    <div>
      <Icon iconId={props.skiliItemLogo} width="50" height="50" />
      <h3>{props.skillItemTitle || 'HTML5'}</h3>
      <p>Lorem ipsum dolor sit, </p>
      <p>amet consectetur adipisicing elit.</p>
      <p>Exercitationem, alias delectus.</p>
      <p>Temporibus facilis non, voluptas.</p>
    </div>
  );
}

// const StyledItemHeader = styled.h3``;
