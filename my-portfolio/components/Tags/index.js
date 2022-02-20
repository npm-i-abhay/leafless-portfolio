import React from 'react';

import { TaggedCont } from './styles';

export const Tags = ({txt="default"}) => {
  return <TaggedCont className='change'>
      {txt}
  </TaggedCont>;
};
