import React from 'react';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';

// component imports 
import { MyButton } from '../Button';

// styled components imports
import { 
    InfoContainer, 
    Description, 
    StackCont, 
    TechStack,
    Explore 
} from './styles';

export const ProjectInfo = ({
    description="some paragraph",
    imgUrl="https://placekitten.com/50/50"


}) => {
    
    const { theme, setTheme} = useTheme()
    
  return (
      <InfoContainer>
            <Description txtCol={comp_theme[theme].mainTxt}> 
                {description}
            </Description>
            <StackCont> 
                <TechStack src={imgUrl}/>
            </StackCont>
            <MyButton txt='Explore'/>
      </InfoContainer>
  );
};
