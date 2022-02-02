import React from 'react';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';
// styled components imports
import { ButtonCont } from './styles';


const Button = ({txt = "default"}) => {
  const {theme,setTheme} = useTheme()

  return (
      <ButtonCont btnTxt={comp_theme[theme].mainTxt}> 
          {txt}
      </ButtonCont>
  
  )
};

export default Button;
