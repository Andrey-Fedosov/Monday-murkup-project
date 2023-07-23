import React from 'react';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import styled from 'styled-components';
import { SkillsBox } from '../../../components/skillsBox/SkillsBox';

export function Skills() {
  return (
    <StyledSkills>
      <FlexWrapper direction="column" justify="center" align="center">
        <SectionTitle titleValue="Skills" />
        <SkillsBox />
      </FlexWrapper>
    </StyledSkills>
  );
}

const StyledSkills = styled.div`
  // min-height: 100vh;
  background-color: #865b5b;
`;
