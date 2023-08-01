import React from 'react';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import styled from 'styled-components';
import { SkillsBox } from '../../../components/skillsBox/SkillsBox';
import { Container } from '../../../components/Container';

export function Skills() {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper
          direction="column"
          justify="center"
          align="center"
          wrap="wrap"
        >
          <SkillsBox />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
}

const StyledSkills = styled.section`

`;
