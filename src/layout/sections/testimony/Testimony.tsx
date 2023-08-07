import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { TestimonyItem } from '../../../components/testimonyItem/TestimonyItem';
import { Container } from '../../../components/Container';
import { Icon } from '../../../components/icon/Icon';
import { IconWrapper } from '../../../components/skillsBox/SkillsBox';

export function Testimony() {
  return (
    <StyledTestimony>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper
          direction="column"
          justify="center"
          align="center"
          height="100%"
        >
          <IconWrapper>
            <Icon iconId="quoteSVG" width="50" height="50" />
          </IconWrapper>
          <TestimonyItem />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
}

const StyledTestimony = styled.section`
  /* min-height: 100vh; */
  /* background-color: #bd9595; */
`;
