import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/Themes';
import { ExampleMenu } from './exampleMenu/ExampleMenu';
import { GlobalStyle } from '../styles/GlobalStyled';
import { Link } from './Link';
import { Button } from './Button';

const itemMenu = ['Demo', 'Code'];

export function WorkExampleItem(props: {
  title: string;
  src: string;
  text: string;
}) {
  return (
    <StyledWorkExampleItem>
      <ImageWrapper>
        <StyledImage src={props.src} alt="example image" />
        <Button>view projects</Button>
      </ImageWrapper>

      <StyledExampleContent>
        <h3>{props.title}</h3>
        <StyledText>{props.text}</StyledText>
        {/* <ExampleMenu menuItems={itemMenu} /> */}
        <Link href="#">demo</Link>
        <Link href="#">code</Link>
      </StyledExampleContent>
    </StyledWorkExampleItem>
  );
}

export const StyledWorkExampleItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 540px;
  width: 100%;
  ${Link} {
    padding: 0 0 8px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
      /* z-index: -1; */
    }

    ${Button} {
      opacity: 1;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%);
      /* z-index: 0; */
    }
  }

  ${Button} {
    opacity: 1;
    position: absolute;

    left: 50%;
    top: 50%;
    transform: translate(-50%);

    &::before {
      width: 100%;
      height: 100%;
    }
    /* z-index: 0; */
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
  }
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
  padding: 25px 20px 25px 20px;

  h3 {
    /* margin: 25px 20px 25px 20px; */
  }

  ${Link} {
    /* margin: 25px 20px 25px 20px;
    padding-bottom: 8px; */
  }
`;

const StyledText = styled.p`
  margin: 14px 0 10px;
`;
