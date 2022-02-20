import React, {useState, useEffect} from 'react';
import { Swipeable} from "react-swipeable";
import {motion} from 'framer-motion'
import {BiRightArrow, BiLeftArrow} from 'react-icons/bi'
import { 
  Cont, 
  CardCont,
  CardWrapper, 
  Card,
  ProjectCard,
  ProjectButton

} from './styles';


const default_data = [
  "https://placekitten.com/500/500",
  "https://placekitten.com/1000/1000",
  "https://placekitten.com/800/800",
  "https://placekitten.com/600/600",
]

export const MobCarousel = ({
  imgData = default_data,
  dim = 100
}) => {

  // when index is 0 left=0, when index is 1, left = -100, index is 2 left is -200 and so on........ 
  const [index, setIndex] = useState(0)
  const [left, setLeft] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0)
  const [margin, setMargin] = useState(5)

  useEffect(()=>
  {
    setScreenWidth(window.innerWidth)

    if(screenWidth < 600)
    {
      setMargin(1.5)
      console.log(true)
    }
    
      else setMargin(5)
    
    console.log(screenWidth)

  },[screenWidth])
  // const [op, setOp] = useState(0);

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
          <CardWrapper left={index * (dim -98)}>
              {imgData.map ((o,i)=>
              <Swipeable onSwiped={handleSwipe}>
                <ProjectCard
                // initial={{width:0,height:0}}
                  animate={{
                    width:i===index ?'80vw':'60vw', 
                    height:i===index ?'80vh':'60vh', 
                    originX:0, 
                    opacity:i===index?1:.25,
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
                  width:i===index ?'100%':100, 
                  height:i===index ?'50%':100, 
                  originX:0, 
                  originY:0,
                  opacity:i===index?1:1}}
                  transition={{
                    mass:1,
                    damping:4,
                  }  }
                onClick={()=> setIndex(i)}
                z={i===index? imgData.length+1 : imgData - 1}
                src={o} 
                key={i}/>
                <ProjectButton/>
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