import React from 'react';
import iconSprite from '../../assets/images/iconSprite.svg';
import { theme } from '../../styles/Themes';

type IconPropsType = {
  iconId?: string;
  width?: string;
  height?: string;
  viewbox?: string;
  fill?: string;
};

export function Icon(props: IconPropsType) {
  return (
    <svg
      width={props.width || '50'}
      height={props.height || '50'}
      viewBox={props.viewbox || '0 0 50 50'}
      fill={props.fill || theme.colors.accentColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconSprite}#${props.iconId}`} />
    </svg>
  );
}
