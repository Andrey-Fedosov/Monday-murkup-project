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
      <IconWrapper>
        <Icon iconId={props.skilliItemLogo} width="50" height="50" />
      </IconWrapper>

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
  padding: 62px 20px 40px;
`;
const StyledSkillItemTitle = styled.h3`
  font-size: 16px;
  margin: 90px 0 15px;
  text-transform: uppercase;
  letter-spacing: 1.4;
  line-height: 1.4;
  font-weight: 700;
`;
const StyledSkillItemText = styled.p`
  color: ${theme.colors.fontColor};
  font-size: 16px;
  text-align: center;
`;

export const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    top: 50%;
    left: 50%;
    transform: rotate(45deg) translate(-50%, -50%);
    transform-origin: top left;
  }
`;
