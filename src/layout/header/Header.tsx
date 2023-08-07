import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';
import { theme } from '../../styles/Themes';
import { HeaderMenu } from './headerMenu/HeaderMenu';
import { MobileMenu } from './mobileMenu/MobileMenu';

const headerMenuItemsArray = [
  'Home',
  'Skills',
  'Works',
  'Testimony',
  'Contact',
];

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
          <Logo />
          <HeaderMenu headerMenuItems={headerMenuItemsArray} />
          <MobileMenu headerMenuItems={headerMenuItemsArray} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: ${theme.colors.primaryBg};
  color: ${theme.colors.fontColor};
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  opacity: 90%;
`;
