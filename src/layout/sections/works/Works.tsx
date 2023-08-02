import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import React from 'react';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import styled from 'styled-components';
import { WorkExample } from '../../../components/workExample/WorkExample';
import { Container } from '../../../components/Container';

export function Works() {
  return (
    <StyledWorks>
      <Container>
        <FlexWrapper direction="column" justify="center" align="center">
          <SectionTitle>My Works</SectionTitle>
          <ExampleMenu />
          <WorkExample />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
}

const StyledWorks = styled.section`
  min-height: 100vh;
  /* background-color: #ac5c5c; */
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
