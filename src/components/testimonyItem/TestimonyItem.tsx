import React from 'react';
import styled from 'styled-components';

import { theme } from '../../styles/Themes';

export function TestimonyItem() {
  return (
    <StyledItem>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae
        aliquam beatae cum eveniet quis?.
      </p>
      <p className="testimony-name">Name name</p>

      <StyledPagination>
        <div></div>
        <div className="active"></div>
        <div></div>
      </StyledPagination>
    </StyledItem>
  );
}

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    margin: 70px 0 22px;
    font-family: 'Poppins', sans-serif;
  }

  .testimony-name {
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    font-size: 16px;
    margin: 0px 0 42px;
  }
`;

const StyledPagination = styled.div`
  display: flex;

  div {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.5);
    margin-right: 7px;

    &.active {
      width: 30px;
      background-color: ${theme.colors.accentColor};
    }
  }

  &:hover {
    cursor: pointer;
  }
`;
