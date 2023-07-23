import React from 'react';
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';
import { SectionTitle } from '../../components/sectionTitle/SectionTitle';
import { Icon } from '../../components/icon/Icon';
import styled from 'styled-components';

export function Footer() {
  return (
    <StyledFooter>
      <FlexWrapper direction="column" justify="center" align="center">
        <SectionTitle titleValue="Svetlana" />
        <StyledSocialIcons>
          <Icon iconId="telegramSVG" width="70" height="70" />
          <Icon iconId="instaSVG" width="70" height="70" />
          <Icon iconId="vkSVG" width="70" height="70" />
          <Icon iconId="linkedInSvg" width="70" height="70" />
        </StyledSocialIcons>
        <p> ©️ Svetlana Dyablo. All rights reserved</p>
      </FlexWrapper>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: #f57c7c;
`;

const StyledSocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 27px;
`;
