import React from 'react';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';
// styled components imports 
import { Heading, SubHeading, HeadingCont } from './styles';

export const WelcomeHeading = (
  {
    lineOne="",
    lineTwo="",
    accentOne="",
    accentTwo = "",
    lineThree="",
  }
) => {
const {theme,setTheme} = useTheme()

  return <HeadingCont>
    <div>
      <Heading headCol={comp_theme[theme].mainTxt} > 
        {lineOne} 
      </Heading>
    </div>
    
    <div>
      <Heading headCol={comp_theme[theme].mainTxt}> 
        {lineTwo}
      </Heading>
      
      <SubHeading subHeadCol={comp_theme[theme].accentTxt}> 
        {accentOne}
      </SubHeading>
    </div>
    
    <div>
      <Heading headCol={comp_theme[theme].mainTxt}> 
        {lineThree}
      </Heading>
      <SubHeading subHeadCol={comp_theme[theme].accentTxt}> 
        {accentTwo}
      </SubHeading>
    </div>
    
    
  </HeadingCont>;
};


