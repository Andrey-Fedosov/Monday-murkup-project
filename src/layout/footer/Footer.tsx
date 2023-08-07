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
            <SocialItem>
              <SocialLink href="#">
                <Icon iconId="telegramSVG" width="70" height="70" />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="#">
                <Icon iconId="instaSVG" width="70" height="70" />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="#">
                <Icon iconId="vkSVG" width="70" height="70" />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="#">
                <Icon iconId="linkedInSvg" width="70" height="70" />
              </SocialLink>
            </SocialItem>
          </StyledSocialIcons>
          <p> ©️ 2023 Svetlana Dyablo. All rights reserved</p>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0px;
  // opacity: 0.5;
`;

const StyledSocialIcons = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  margin: 30px 0;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;
