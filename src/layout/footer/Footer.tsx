import React from 'react';
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';
import { SectionTitle } from '../../components/sectionTitle/SectionTitle';
import { Icon } from '../../components/icon/Icon';
import styled from 'styled-components';
import { theme } from '../../styles/Themes';
import { StyledName } from '../../components/Name';

export function Footer() {
  return (
    <StyledFooter>
      <FlexWrapper direction="column" justify="center" align="center">
        <StyledName>Svetlana</StyledName>
        <StyledSocialIcons>
          <SocialItem>
            <SocialLink href="#">
              <Icon
                iconId="telegramSVG"
                width="21px"
                height="21px"
                viewbox="0 0 21px 21px"
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href="#">
              <Icon
                iconId="instaSVG"
                width="21px"
                height="21px"
                viewbox="0 0 21px 21px"
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href="#">
              <Icon
                iconId="vkSVG"
                width="21px"
                height="21px"
                viewbox="0 0 21px 21px"
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href="#">
              <Icon
                iconId="linkedInSvg"
                width="21px"
                height="21px"
                viewbox="0 0 21px 21px"
              />
            </SocialLink>
          </SocialItem>
        </StyledSocialIcons>
        <CopyrightLine>
          ©️ 2023 Svetlana Dyablo. All rights reserved
        </CopyrightLine>
      </FlexWrapper>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0px;
`;

const StyledSocialIcons = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  margin: 30px 0;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.accentColor};

  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`;

const CopyrightLine = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`;
