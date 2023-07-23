import React from 'react';
import styled from 'styled-components';

type SectionTitlePropsType = {
  titleValue?: string;
};

export function SectionTitle(props: SectionTitlePropsType) {
  return (
    <div>
      <h2>{`${props.titleValue}`}</h2>
    </div>
  );
}

const StyledSkills = styled.div`
  min-height: 100vh;
  background-color: #fdadad;
`;
