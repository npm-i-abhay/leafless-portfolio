import React from 'react';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';
import { motion } from 'framer-motion';
// component imports 
import { MyButton } from '../Button';
import { ImageContainer } from '../ImageCard';
import { WelcomeHeading } from '../HomeHeading';
import { Animation } from '../Animation';
// styled components imports
import { 
    InfoContainer, 
    Description, 
    StackCont, 
    TechStack,
    Explore,
    ContentCont,
    AnimContainer
} from './styles';
import { ProjectTitle } from './styles';

export const DesignCategory = ({
    description="some paragraph",
    stackData=[
        "https://placekitten.com/100/100",
        "https://placekitten.com/100/100",
        "https://placekitten.com/100/100",
        "https://placekitten.com/100/100",
    ],
    img,
    order=0,
    radius='5px',
    onButtClick=()=>{},
    initial,
    whileInView,
    txtCol,
    heading,
    txt,
    content

}) => {
    
    const { theme, setTheme} = useTheme()
    
  return (
        <InfoContainer 
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true }} 
            >
            <AnimContainer >
                <Animation path='/animation/design.json' />
            </AnimContainer>

            
                
            
            <ContentCont >
                
                <Description txtCol={comp_theme[theme].mainTxt}> 
                    {description}
                </Description>
                <StackCont
                    initial={{y:0}}
                    animate={{y:[0,-40,0]}}
                    transition={{delay:.5, staggerChildren:0.5}}> 
                    {stackData.map((o,i)=>(<TechStack
                                            initial={{y:0}}
                                            animate={{y:[0,-40,0]}}
                                            transition={{duration:.5}}
                                            
                                            key={i} radius={radius} src={o}/>))}
                </StackCont>
                <MyButton
                    txt={txt}
                    onButtClick={onButtClick}
                    />
                
            </ContentCont>

        </InfoContainer>
);
};
