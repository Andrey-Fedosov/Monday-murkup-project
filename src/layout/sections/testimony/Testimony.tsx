import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { TestimonyItem } from '../../../components/testimonyItem/TestimonyItem';

export function Testimony() {
  return (
    <StyledTestimony>
      <FlexWrapper direction="column" justify="center" align="center">
        <SectionTitle titleValue="Testimony" />
        <TestimonyItem />
      </FlexWrapper>
    </StyledTestimony>
  );
}

const StyledTestimony = styled.div`
  min-height: 100vh;
  background-color: #fdadad;
`;
