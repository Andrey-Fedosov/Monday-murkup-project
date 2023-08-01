// import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Themes';
// import { theme } from '../../styles/Themes';

type SectionTitlePropsType = {
  titleValue?: string;
};

// export function SectionTitle(props: SectionTitlePropsType) {
//   return (
//     <div>
//       <h2>{`${props.titleValue}`}</h2>
//     </div>
//   );
// }

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 36px;
  letter-spacing: 5px;
  font-weight: 600;
  margin-bottom: 90px;

  position: relative;
  /* z-index: -2; */

  &::before {
    content: '';
    display: inline-block;
    height: 1px;
    width: 55px;
    background-color: ${theme.colors.accentColor};

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;

    /* z-index: 100; */
  }
`;
