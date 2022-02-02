import React from 'react';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';
// styled components imports 
import { Heading, SubHeading } from './styles';

export const WelcomeHeading = () => {
const {theme,setTheme} = useTheme()

  return <div>
    <div>
      <Heading headCol={comp_theme[theme].mainTxt} > Hi </Heading>
    </div>
    
    <div>
      <Heading headCol={comp_theme[theme].mainTxt}> I'm</Heading>
      <SubHeading subHeadCol={comp_theme[theme].accentTxt}> Abhay, </SubHeading>
    </div>
    
    <div>
      <Heading headCol={comp_theme[theme].mainTxt}> Front End </Heading>
      <SubHeading subHeadCol={comp_theme[theme].accentTxt}>Developer </SubHeading>
    </div>
    
    
  </div>;
};


