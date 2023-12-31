import React from 'react';
import styled from 'styled-components';

type FlexWrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
  wrap?: string;
  background?: string;
  height?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  background-color: ${(props) => props.background};
  height: ${(props) => props.height || '100%'};
`;
