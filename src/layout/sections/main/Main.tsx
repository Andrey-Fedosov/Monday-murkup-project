import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/Rectangle-4.webp';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';

export function Main() {
  return (
    <StyledMain>
      <FlexWrapper align="center" justify="space-around">
        <div>
          <span>Hi there</span>
          <h2>I'am Svetlana</h2>
          <h1>Web Developer</h1>
        </div>
        <StyledPhoto src={photo} alt="girl photo" />
      </FlexWrapper>
    </StyledMain>
  );
}

const StyledMain = styled.section`
  min-height: 100vh;
  /* background-color: #fdadad; */
`;

const StyledPhoto = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;
