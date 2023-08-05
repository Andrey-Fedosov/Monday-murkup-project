import styled from 'styled-components';
import { theme } from '../styles/Themes';

export const Button = styled.button`
  font-weight: 400;
  font-size: 14px;
  align-items: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;
  padding: auto;
  position: relative;
  z-index: 0;

  font-family: 'Poppins', sans-serif;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    background-color: ${theme.colors.accentColor};
    width: 50%;
    height: 10px;
    z-index: -1;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover {
    &::before {
      width: 100%;
      height: 100%;
    }
  }
`;
