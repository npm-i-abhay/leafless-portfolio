import React, {useState, useEffect} from 'react';
import { Swipeable} from "react-swipeable";
import {motion} from 'framer-motion'
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';
import Router, { useRouter } from 'next/router';
import { 
  Cont, 
  CardCont,
  CardWrapper, 
  Card,
  ProjectCard,
  ProjectButton,
  StackCont,
  TechStack,
  Description,
  MainHead,
  InfoContainer,
  ProjectTitle

} from './styles';


const default_data = [
  {
    title:'Buzzy Bee',
    link:"https://placekitten.com/500/500", 
    techStack:[
      "https://placekitten.com/500/500",
      "https://placekitten.com/500/500",
      "https://placekitten.com/500/500",
    ],
    description : 'this is a project card for mobile size ',
    route: '/work',
    display:'inline'

  
  },
  {
    title:'Buzzy Bee',
    link:"https://placekitten.com/500/500", 
    techStack:[
      "https://placekitten.com/500/500",
      "https://placekitten.com/500/500",
      "https://placekitten.com/500/500",
    ],
    description : 'this is a project card for mobile size ',
    route:'/',
    display:'none'
  
  },
  {
    title:'Buzzy Bee',
    link:"https://placekitten.com/500/500", 
    techStack:[
      "https://placekitten.com/500/500",
      "https://placekitten.com/500/500",
      "https://placekitten.com/500/500",
    ],
    description : 'this is a project card for mobile size ',
    route:'/',
    display:'none'
  },
  
]

export const MobCarousel = ({
  imgData = default_data,
  dim = 100,
  onClick=()=>{}
}) => {

  const r = useRouter()
  // when index is 0 left=0, when index is 1, left = -100, index is 2 left is -200 and so on........ 
  const [index, setIndex] = useState(0)
  const [left, setLeft] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0)
  const {theme,setTheme} = useTheme()

  // constant to refer to provider variables when adding configs
  const themer = comp_theme[theme]
  // swipe handler function to increase or decrease the index on swipe
  const handleSwipe = ({dir})=>
  {
    if (dir === "Right") 
    {
      if (index) {
        setIndex(index-1)
      }
      if(index<0)
      {
        setIndex(0)
      }
      if (index>imgData.length-1)
      {
          setIndex ( 0)
      }
    }
    if (dir === "Left") 
    {
        setIndex(index+1)
        if(index<0)
        {
          setIndex(0)
        }
        if (index>imgData.length-2)
        {
            setIndex ( 0)
        }
    }

  }


return <Cont>
    {/* <Card src={imgData[index]}/> */}

        
          <CardCont dim={dim + 10}>
          <CardWrapper left={index * (dim -102)}>
              {imgData.map ((o,i)=>
              <Swipeable key={i} onSwiped={handleSwipe}>
                  <ProjectCard
                  bgCol={themer.footer}
                  borderCol={themer.menu}
                    animate={{
                      width:i===index ?'80vw':'60vw', 
                      height:i===index ?'95vh':'95vh', 
                      originX:0, 
                      originY:0, 
                      opacity:i===index?1:.5,
                      scale:1
                    }}
                      transition={{
                        // delay:.5,
                        type:'spring',
                        duration:2, 
                        staggerChildren:0.4,
                        mass:1,
                        damping:10,
                        stiffness:100
                      }}
                      >
                <Card
                  // framer motion animation on swipe
                  initial={{width:0,height:0}}
                  animate={{
                    width:i===index ?'100%':0, 
                    height:i===index ?'50%':'50%', 
                    originX:0, 
                    originY:0,
                    }}
                    transition={{
                      mass:1,
                      damping:4,
                    }  }
                  z={i===index? imgData.length+1 : imgData - 1}
                  src={o.link} 
                  key={i}/>
                  <InfoContainer>

                      <ProjectTitle txtCol={themer.mainTxt}>
                        {o.title}
                      </ProjectTitle>

                      <Description txtCol={themer.mainTxt}>
                        {o.description}
                      </Description>

                      <StackCont>
                        {o.techStack.map((el)=>(<TechStack key={i} src={el} />))}
                      </StackCont>

                      <ProjectButton 
                      display={o.display}
                        onClick={()=>{r.push(`${o.route}`)}}
                        bgCol={themer.menu}
                        txtCol={themer.mainTxt}> 
                          View 
                      </ProjectButton>
                      
                  </InfoContainer>
                  </ProjectCard>
                </Swipeable>
                )}
                
          </CardWrapper>
        </CardCont>
          
  


  </Cont>;
};

{/* <CardCont dim={dim + 10}>
          <CardWrapper left={index * (dim -62)}>
              {imgData.map ((o,i)=>
              <Swipeable onSwiped={handleSwipe}>
              <Card
                // framer motion animation on swipe
                animate={{
                  width:i===index ?'60vw':100, 
                  height:i===index ?'60vw':100, 
                  originX:0, 
                  opacity:i===index?1:.25}}

                transition={{delay:0, duration:0.1 }  }
                onClick={()=> setIndex(i)}
                dim = {i=== index?dim: dim-20}
                z={i===index? imgData.length+1 : imgData - 1}
                src={o} 
                key={i}/>
                </Swipeable>
                )}
                
          </CardWrapper>
        </CardCont>
           */}