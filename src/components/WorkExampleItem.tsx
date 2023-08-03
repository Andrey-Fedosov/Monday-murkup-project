import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/Themes';
import { ExampleMenu } from './exampleMenu/ExampleMenu';
import { GlobalStyle } from '../styles/GlobalStyled';

const itemMenu = ['Demo', 'Code'];

export function WorkExampleItem(props: {
  title: string;
  src: string;
  text: string;
}) {
  return (
    <StyledWorkExampleItem>
      <StyledImage src={props.src} alt="example image" />
      <StyledExampleContent>
        <h3>{props.title}</h3>
        <StyledText>{props.text}</StyledText>
        <ExampleMenu menuItems={itemMenu} />
      </StyledExampleContent>
    </StyledWorkExampleItem>
  );
}

export const StyledWorkExampleItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;

  /* gap: 20px; */
`;

const StyledImage = styled.img`
  display: inline-block;
  max-width: 540px;
  height: 260px;
  object-fit: cover;
`;

const StyledExampleContent = styled.div`
  background-color: ${theme.colors.secondaryBg};
  justify-content: flex-start;
  h3 {
    padding: 20px 0px 0px 20px;
  }
`;

const StyledText = styled.p`
  font-size: 14px;
  padding: 14px 20px 20px 20px;
`;
