import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { Container } from '../../../components/Container';

export function Contact() {
  return (
    <StyledContact>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <FlexWrapper direction="column" align="center" justify="center">
          <StyledContactBox>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Name" />
            <textarea />
            <input type="button" value="send message" />
          </StyledContactBox>
        </FlexWrapper>
      </Container>
    </StyledContact>
  );
}

const StyledContact = styled.section`
  /* min-height: 100vh; */
  /* background-color: #ad6060; */
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
