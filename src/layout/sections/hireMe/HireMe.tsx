import React from 'react';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { Container } from '../../../components/Container';
import { Button } from '../../../components/Button';

export function HireMe() {
  return (
    <StyledHireMe>
      <Container>
        <SectionTitle>I Am Available For Freelance</SectionTitle>
      </Container>
      <FlexWrapper direction="column" justify="center" align="center">
        <Button>hire me</Button>
      </FlexWrapper>
    </StyledHireMe>
  );
}

const StyledHireMe = styled.section`
  /* min-height: 100vh; */
  /* background-color: #d8a7a7; */
`;
