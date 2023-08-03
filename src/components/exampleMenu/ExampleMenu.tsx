import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Themes';

export function ExampleMenu(props: { menuItems: Array<string> }) {
  return (
    <div>
      <StyledList>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </StyledList>
    </div>
  );
}

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  li {
    list-style: none;
  }

  li > a {
    color: ${theme.colors.fontColor};
  }
`;
