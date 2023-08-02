import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { TestimonyItem } from '../../../components/testimonyItem/TestimonyItem';
import { Container } from '../../../components/Container';

export function Testimony() {
  return (
    <StyledTestimony>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction="column" justify="center" align="center">
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
