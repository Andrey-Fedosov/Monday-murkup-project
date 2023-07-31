import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/Rectangle-4.webp';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Themes';

export function Main() {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align="center" justify="space-between">
          <div>
            <SmallText>Hi there</SmallText>
            <NameText>
              I am <span>Svetlana</span>
            </NameText>
            <MainTitle>Web Developer.</MainTitle>
          </div>

          <PhotoWrapper>
            <StyledPhoto src={photo} alt="girl photo" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
}

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  /* background-color: #fdadad; */
`;

const StyledPhoto = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const SmallText = styled.h2`
  font-weight: 400;
  font-size: 14px;
`;
const NameText = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;

    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accentColor};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`;

const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    left: 24px;
    top: -24px;
    z-index: -1;

    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accentColor};
  }
`;
