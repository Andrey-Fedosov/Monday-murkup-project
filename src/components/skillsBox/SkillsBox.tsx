import React from 'react';
import styled from 'styled-components';

export function SkillsBox() {
  return (
    <StyledSkills>
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
    </StyledSkills>
  );
}

const StyledSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

function SkillItem() {
  return (
    <div>
      <div>
        <img src="" alt=""></img>
      </div>
      <h3>HTML5</h3>
      <p>Lorem ipsum dolor sit, </p>
      <p>amet consectetur adipisicing elit.</p>
      <p>Exercitationem, alias delectus.</p>
      <p>Temporibus facilis non, voluptas.</p>
    </div>
  );
}
