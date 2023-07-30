import { isAbsolute } from 'path';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/Themes';

export function HeaderMenu(props: { headerMenuItems: Array<string> }) {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.headerMenuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="#">
                {item}
                <Mask>
                  <span>{item}</span>
                </Mask>
                <Mask>
                  <span>{item}</span>
                </Mask>
              </Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledHeaderMenu>
  );
}

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 50px;
    justify-content: center;
  }
`;

const Link = styled.a`
  color: transparent;
  text-align: center;
  font-family: Josefin Sans, sans-serif;
  font-size: 30px;
  font-weight: 400;
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  /* outline: 1px solid red; */
  color: ${theme.colors.accentColor};

  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const ListItem = styled.li`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accentColor};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -20px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }
    ${Mask} {
      transform: skewX(10deg) translateX(10px);
      color: ${theme.colors.fontColor};
    }

    & + ${Mask} {
      transform: skewX(10deg) translateX(-10px);
    }
  }
`;
