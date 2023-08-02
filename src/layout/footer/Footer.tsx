import React from 'react';
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';
import { SectionTitle } from '../../components/sectionTitle/SectionTitle';
import { Icon } from '../../components/icon/Icon';
import styled from 'styled-components';
import { Container } from '../../components/Container';
import { theme } from '../../styles/Themes';

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <SectionTitle>Svetlana</SectionTitle>
        <FlexWrapper direction="column" justify="center" align="center">
          <StyledSocialIcons>
            <Icon iconId="telegramSVG" width="70" height="70" />
            <Icon iconId="instaSVG" width="70" height="70" />
            <Icon iconId="vkSVG" width="70" height="70" />
            <Icon iconId="linkedInSvg" width="70" height="70" />
          </StyledSocialIcons>
          <p> ©️ Svetlana Dyablo. All rights reserved</p>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
`;

const StyledSocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 27px;
`;
