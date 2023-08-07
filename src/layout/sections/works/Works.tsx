import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import React from 'react';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { ExampleMenu } from '../../../components/exampleMenu/ExampleMenu';
import image1 from '../../../assets/images/Rectangle-15.webp';
import image2 from '../../../assets/images/Rectangle-14.webp';

import { WorkExampleItem } from '../../../components/WorkExampleItem';

const workMenuArr = ['all', 'landing page', 'spa', 'react'];

export function Works() {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <ExampleMenu menuItems={workMenuArr} />
        <FlexWrapper justify="center" align="flex-start">
          <WorkExampleItem
            title={'Social Network'}
            src={image1}
            text={
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo corporis maiores placeat fugit asperiores doloremque tempora similique tenetur incidunt debitis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo corporis maiores placeat fugit asperiores doloremque tempora similique tenetur incidunt debitis'
            }
          />
          <WorkExampleItem
            title={'Timer'}
            src={image2}
            text={
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo corporis maiores placeat fugit asperiores doloremque tempora similique tenetur incidunt debitis'
            }
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
}

const StyledWorks = styled.section``;
