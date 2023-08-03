import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { IconWrapper } from '../skillsBox/SkillsBox';

export function TestimonyItem() {
  return (
    <StyledItem>
      <IconWrapper>
        <Icon iconId="quoteSVG" width="50" height="50" />
      </IconWrapper>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae
        aliquam beatae cum eveniet quis?.
      </p>
      <p>Name name</p>
    </StyledItem>
  );
}

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    display: inline-block;
  }
`;
