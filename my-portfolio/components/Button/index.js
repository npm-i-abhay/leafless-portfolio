import React from 'react';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';
import { motion } from 'framer-motion';
// styled components imports
import { ButtonCont, CtaButton } from './styles';


export const MyButton = ({
  txt = "default",
  width= "250px",
  onButtClick=()=>{},
  display
}) => {
  const {theme,setTheme} = useTheme()

  return (<ButtonCont  >
            <CtaButton whileHover={{boxShadow:'inset 0 0 15px #8B3AF3', transition:{duration:2, type:'spring'}}} display={display}
              width={width}
              btnTxt={comp_theme[theme].mainTxt} 
              onClick={onButtClick}
              > 
          {txt}
      </CtaButton>
  </ButtonCont>

  
  )
};


