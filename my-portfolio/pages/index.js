import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LottieControl } from '@/components/ScrollAnimation'
import { Router, useRouter } from 'next/router'

// styled components 
const Wrapper = styled(motion.div)`
height:100%;
display:flex;
flex-direction:column;
// align-items:center;
justify-content:space-between;
overflow:hidden;
`
const Header = styled.div`
// border:2px solid blue;
display:flex;
justify-content:flex-end;
`

import { 
  ChartCont,
  IntroHeading

} from '@/styles/globalStyles'


// other imports
import SmoothScroll from '@/components/SmoothScroll'

// Component imports
import {MyButton} from '@/components/Button'
import { Footer } from '@/components/Footer'
import { WelcomeHeading } from '@/components/HomeHeading'
import { Tags } from '@/components/Tags'
import { ProjectInfo } from '@/components/ProjectInfo'
import {HeaderHam} from '@/components/HeaderHam'
import {Navigation} from '@/components/Navigation'
import { Animation } from '@/components/Animation'
import { AnimationCont } from '@/styles/homeStyles'
import { MobCarousel } from '@/components/MobCarousel'

export default function Home() {

const router = useRouter()

// state to keep track of current screen size
const [sWidth, setSwidth] = useState()


useEffect(()=>{
  setSwidth(window.innerWidth)
  window.onresize=()=>{setSwidth(window.innerWidth)}
  window.onload=()=>{setSwidth(window.innerWidth)}

// detecting when the screen resizes
},[sWidth])


const techStackOne= 
[  
  '/tech/react.png',
  '/tech/javascript.png',
  '/tech/php.png',
  '/tech/expo.png',
  '/tech/styled.png',
  '/tech/Next.png',
  '/tech/Node.png',
  '/tech/Npm.png',
]
const techStackTwo= 
[  
  '/tech/react.png',
  '/tech/javascript.png',
  '/tech/styled.png',
  '/tech/Next.png',
  '/tech/Node.png',
  '/tech/Npm.png',
  '/tech/story.png',
]

  
  const [toggle,setToggle] = useState(false)
  const [hammer, setHammer]= useState(false)

const mainVariants = {
  hidden:{
    x:2000
  },
  visible:{
    x:0,
    transition:{ 
      type:'spring', 
      duration:1,
      when:"beforeChildren",
      staggerChildren:1
    } 
    
  }
}

const imgVariants = {
  hidden:{
    y:-1000,
    scale:50,
    x:0
  },
  visible:{
    y: [0,-300,0,-200,0,-150,0,-100,0,-50,0,-30,0,-20,0,-10,0,-5,0],
    x: [300,400,500,600,800,850,950, 0],
    scale:1,
    transition:{
      duration:4.5, 
      type:'spring', 
      // stiffness:50,
      damping:10
      // yoyo:10
    }
  }
}


  return (
    <Wrapper 
      variants={mainVariants}
      initial='hidden'
      animate='visible'
    >
      <Header>
          <HeaderHam 
            onHamClick={()=>{ 
            setHammer(!hammer)
            setToggle(!toggle)
            }}
        
            ham={hammer} 
            // setHam={setHammer} 
            />

      </Header>


    <Navigation 
    toggleMenu={toggle}  
    setToggleMenu={setToggle}
    myHam = {hammer}
    hamClick={()=>
                {
                setHammer(!hammer)
                setToggle(!toggle)
                }}
    />
    <IntroHeading>
    
    {/* <LottieControl/> */}
      <Tags  txt='<h1>'/>
          <WelcomeHeading
            lineOne='Hi'
            lineTwo="I'm"
            accentOne=' Abhay,'
            lineThree='Front-End'
            accentTwo=' Developer'/>
      <Tags txt='</h1>'/>
      
      <Tags txt='<button>'/>
          <MyButton/>
      <Tags txt='</button>'/>
      
      </IntroHeading>
      
      <ChartCont>
        {/* <MyChart/> */}
      </ChartCont>
              
      {/* <AnimationCont
        variants={imgVariants}> 
        <Animation path='/animation/react.json' />
      </AnimationCont> */}
      
    {sWidth >=500? 
    <>
      <Tags txt='<Img src="../'/>
        <ProjectInfo
          stackData={techStackOne}
          img='/test/ss1.jpeg'

          onButtClick={()=>{router.push('/project')}}

          />
      <Tags txt='/>'/>

      <Tags txt='<Img src="../'/>
        <ProjectInfo
          stackData={techStackTwo}
          order={-1}
          img='/test/ss3.jpeg'

          />
      <Tags txt='/>'/> </>
    :
    
    <MobCarousel dim={40} /> }
          



      {/* <div style={{color:'white'}}>djbdskjadsbdsak</div> */}
      <Footer/> 
    </Wrapper>
  )
}
