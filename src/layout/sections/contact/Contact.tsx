import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Themes';
import { Button } from '../../../components/Button';

export function Contact() {
  return (
    <StyledContact>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <FlexWrapper direction="column" align="center" justify="center">
          <StyledContactBox>
            <StyledInput placeholder="name"></StyledInput>
            <StyledInput placeholder="name"></StyledInput>
            <StyledInput placeholder="message" as={'textarea'}></StyledInput>

            <Button>Send a message</Button>
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

const StyledContactBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  max-width: 540px;
  width: 100%;
  margin: 0 auto;

  textarea {
    resize: none;
    max-width: 540px;
    width: 100%;
    height: 155px;
  }
`;

const StyledInput = styled.input`
  box-shadow: none;
  max-width: 540px;
  height: 27px;
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid #4a4a4a;
  padding: 7px 15px 7px 15px;

  font-family: 'Poppins', sans-serif;
  color: ${theme.colors.fontColor};
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;

  &::placeholder {
    color: ${theme.colors.borderColor};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`;
