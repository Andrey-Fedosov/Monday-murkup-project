import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { theme } from '../../styles/Themes';

type SkillItemPropsType = {
  skillItemTitle?: string;
  skilliItemLogo?: string;
  skillItemText?: string;
};

export function SkillsBox() {
  return (
    <StyledSkills>
      <SkillItem
        skillItemTitle="HTML5"
        skilliItemLogo="codeSVG"
        skillItemText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex corporis molestiae fuga est qui tenetur."
      />

      <SkillItem
        skillItemTitle="CSS3"
        skilliItemLogo="cssSVG"
        skillItemText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex corporis molestiae fuga est qui tenetur."
      />

      <SkillItem
        skillItemTitle="FIGMA"
        skilliItemLogo="figmaSVG"
        skillItemText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex corporis molestiae fuga est qui tenetur."
      />

      <SkillItem
        skillItemTitle="REACT"
        skilliItemLogo="reactSVG"
        skillItemText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex corporis molestiae fuga est qui tenetur."
      />

      <SkillItem
        skillItemTitle="STYLE COMPONENTS"
        skilliItemLogo="stCompSVG"
        skillItemText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex corporis molestiae fuga est qui tenetur."
      />
      <SkillItem
        skillItemTitle="TYPESCRIPT"
        skilliItemLogo="typescriptSVG"
        skillItemText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex corporis molestiae fuga est qui tenetur."
      />
    </StyledSkills>
  );
}

const StyledSkills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`;

function SkillItem(props: SkillItemPropsType) {
  return (
    <StyledItem>
      <Icon iconId={props.skilliItemLogo} width="50" height="50" />
      <StyledSkillItemTitle>{props.skillItemTitle}</StyledSkillItemTitle>
      <StyledSkillItemText>{props.skillItemText}</StyledSkillItemText>
    </StyledItem>
  );
}

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-color: transparent;
`;
const StyledSkillItemTitle = styled.h3`
  font-size: 20px;
`;
const StyledSkillItemText = styled.p`
  color: ${theme.colors.fontColor};
  font-size: 16px;
`;
