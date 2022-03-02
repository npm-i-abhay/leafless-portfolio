import React from 'react';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';
import { motion } from 'framer-motion';
// component imports 
import { MyButton } from '../Button';
import { ImageContainer } from '../ImageCard';
import { WelcomeHeading } from '../HomeHeading';
import { useRouter } from 'next/router';
// styled components imports
import { 
    InfoContainer, 
    Description, 
    StackCont, 
    TechStack,
    Explore,
    ContentCont,
    Row,

    
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
    onButtClick2=()=>{},
    initial,
    whileInView,
    txtCol,
    heading,
    txt,
    txt2,
    display,
    displayGit,
    justify='space-around',
    gitWidth,
    sourceRoute
}) => {
    
    const { theme, setTheme} = useTheme()
    const router = useRouter()
  return (
        <InfoContainer 
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true }} 
            >
            <ImageContainer 
                inView={{opacity:1, transition:{duration:.5}, scale:[1.5,1]}}
                imgUrl={img}/>
            
            <ContentCont >
                <ProjectTitle
                    className='projectHeadings'
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
                                            
                                            key={i} radius={radius} src={o}/>))}
                </StackCont>
                <Row justify={justify} >
                    <MyButton 
                        display={display}
                        txt={txt}
                        onButtClick={onButtClick}
                        />
                    <MyButton 
                        display={displayGit}
                        // display={display2}
                        txt='View Source'
                        onButtClick={()=>{ window.open(`${sourceRoute}`, '_blank')}}
                        />
                    {/* <MyButton 
                        width={gitWidth}
                        display={displayGit}
                        txt='Source Code'
                        onButtClick={onButtClick}
                        /> */}

                </Row>
                
            </ContentCont>

        </InfoContainer>
);
};
