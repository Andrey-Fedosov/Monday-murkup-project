import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';

export function Contact() {
  return (
    <StyledContact>
      <FlexWrapper direction="column" align="center" justify="center">
        <SectionTitle titleValue="Contact" />
        <StyledContactBox>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Name" />
          <textarea />
          <input type="button" value="send message" />
        </StyledContactBox>
      </FlexWrapper>
    </StyledContact>
  );
}

const StyledContact = styled.div`
  min-height: 100vh;
  background-color: #fdadad;
`;

const StyledContactBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  input,
  textarea {
    width: 540px;
  }

  input:last-of-type {
    max-width: 112px;
  }
`;
