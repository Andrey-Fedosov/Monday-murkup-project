import React from 'react';
import styled from 'styled-components';
import image1 from '../../assets/images/Rectangle-14.webp';
// import image2 from '../../assets/images/Rectangle-16.webp';

export function WorkExample() {
  return (
    <WorkExampleBox>
      <WorkExampleItem />
      <WorkExampleItem />
    </WorkExampleBox>
  );
}

const WorkExampleBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  gap: 30px;
`;

function WorkExampleItem() {
  return (
    <div>
      <StyledImage src={image1} alt="example image" />
      <div>
        <h3></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          doloribus eveniet possimus temporibus quisquam autem .
        </p>
        <ul>
          <li>
            {' '}
            <a href="#">Demo</a>
          </li>
          <li>
            {' '}
            <a href="#">Code</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const StyledImage = styled.img`
  display: inline-block;
  width: 540px;
  height: 260px;
  object-fit: cover;
`;
