import React from 'react';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';
import { motion } from 'framer-motion';
// component imports 
import { MyButton } from '../Button';
import { ImageContainer } from '../ImageCard';
import { WelcomeHeading } from '../HomeHeading';

// styled components imports
import { 
    InfoContainer, 
    Description, 
    StackCont, 
    TechStack,
    Explore,
    ContentCont,
    
    
} from './styles';
import { ProjectTitle } from './styles';

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
    radius='5px',
    onButtClick=()=>{},
    initial,
    whileInView,
    txtCol,
    heading

}) => {
    
    const { theme, setTheme} = useTheme()
    
  return (
        <InfoContainer 
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true }} 
            >
            <ImageContainer 
                inView={{opacity:1, transition:{duration:.5}, scale:[1.5,1]}}
                imgUrl={img}/>
            
            <ContentCont order={order}>
                <ProjectTitle
                    className='heading'
                    txtCol={txtCol} > 
                    {heading} 
                </ProjectTitle>
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
                                            
                                            whileHover={{y:-50 , transition:{type:'spring',duration:.5, mass:0.4, damping:10}}} 
                                            key={i} radius={radius} src={o}/>))}
                </StackCont>
                <MyButton 
                    txt='Explore'
                    onButtClick={onButtClick}
                    />
                
            </ContentCont>

        </InfoContainer>
  );
};
