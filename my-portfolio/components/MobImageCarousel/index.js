import React, {useState, useEffect} from 'react';
import { Swipeable} from "react-swipeable";
import {motion} from 'framer-motion'
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';

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



const default_data=["https://placekitten.com/500/500",
"https://placekitten.com/500/500",
"https://placekitten.com/500/500",]
export const MobImageCarousel = ({
imgData = default_data,
dim = 40,
}) => {

  
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
          <CardWrapper left={index * (dim -62)}>
            {imgData.map ((o,i)=>
            <Swipeable key={i} onSwiped={handleSwipe}>
            <Card
                // framer motion animation on swipe
                animate={{
                width:i===index ?'90vw':100, 
                height:i===index ?'100vw':100, 
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