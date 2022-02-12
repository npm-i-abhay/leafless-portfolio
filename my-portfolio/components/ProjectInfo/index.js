import React from 'react';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';

// component imports 
import { MyButton } from '../Button';
import { ImageContainer } from '../ImageCard';


// styled components imports
import { 
    InfoContainer, 
    Description, 
    StackCont, 
    TechStack,
    Explore,
    ContentCont,
    
} from './styles';

export const ProjectInfo = ({
    description="some paragraph",
    stackData=[
        "https://placekitten.com/100/100",
        "https://placekitten.com/100/100",
        "https://placekitten.com/100/100",
        "https://placekitten.com/100/100",
    ],
    img,
    order=0,
    radius='5px'
}) => {
    
    const { theme, setTheme} = useTheme()
    
  return (
        <InfoContainer>
            <ImageContainer imgUrl={img}/>
            
            <ContentCont order={order}>
                
                <Description txtCol={comp_theme[theme].mainTxt}> 
                    {description}
                </Description>
                <StackCont> 
                    {stackData.map((o,i)=>(<TechStack key={i} radius={radius} src={o}/>))}
                </StackCont>
                <MyButton txt='Explore'/>
                
            </ContentCont>

        </InfoContainer>
  );
};
