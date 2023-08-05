import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Themes';
import { Link } from '../Link';

export function ExampleMenu(props: { menuItems: Array<string> }) {
  return (
    <div>
      <StyledList>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link href="#">{item}</Link>
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
  margin-bottom: 40px;
  li {
    list-style: none;
    position: relative;
    z-index: 1;
  }
`;
