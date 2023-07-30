import React from 'react';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';

export function HireMe() {
  return (
    <StyledHireMe>
      <FlexWrapper direction="column" justify="center" align="center">
        <SectionTitle titleValue="I Am Available For Freelance" />
        <input type="button" value="HIRE ME" />
      </FlexWrapper>
    </StyledHireMe>
  );
}

const StyledHireMe = styled.section`
  /* min-height: 100vh; */
  /* background-color: #d8a7a7; */
`;
