import React from 'react';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';
// styled components imports
import { ButtonCont } from './styles';


export const MyButton = ({txt = "default"}) => {
  const {theme,setTheme} = useTheme()

  return (
      <ButtonCont btnTxt={comp_theme[theme].mainTxt}> 
          {txt}
      </ButtonCont>
  
  )
};


