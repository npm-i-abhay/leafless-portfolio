import React from 'react';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';
// styled components imports
import { ButtonCont, CtaButton } from './styles';


export const MyButton = ({
  txt = "default",
  width= "250px",
  onButtClick=()=>{},
  display
}) => {
  const {theme,setTheme} = useTheme()

  return (<ButtonCont>
            <CtaButton  display={display}
              width={width}
              btnTxt={comp_theme[theme].mainTxt} 
              onClick={onButtClick}
              > 
          {txt}
      </CtaButton>
  </ButtonCont>

  
  )
};


