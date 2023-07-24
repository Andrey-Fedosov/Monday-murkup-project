import React from 'react';

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
