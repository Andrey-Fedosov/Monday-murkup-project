import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import React from 'react';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import styled from 'styled-components';
import { WorkExample } from '../../../components/workExample/WorkExample';

export function Works() {
  return (
    <StyledWorks>
      <FlexWrapper direction="column" justify="center" align="center">
        <SectionTitle titleValue="My Works" />
        <ExampleMenu />
        <WorkExample />
      </FlexWrapper>
    </StyledWorks>
  );
}

const StyledWorks = styled.div`
  min-height: 100vh;
  background-color: #ac5c5c;
`;

function ExampleMenu() {
  return (
    <div>
      <StyledList>
        <li>
          {' '}
          <a href=""> All</a>
        </li>
        <li>
          {' '}
          <a href="">Landing page</a>
        </li>
        <li>
          {' '}
          <a href="">React</a>
        </li>
        <li>
          {' '}
          <a href="">SPA</a>
        </li>
      </StyledList>
    </div>
  );
}

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  li {
    list-style: none;
  }
`;