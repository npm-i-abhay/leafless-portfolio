import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LottieControl } from '@/components/ScrollAnimation'
import { Router, useRouter } from 'next/router'
import { useTheme } from '@/utils/provider'
import { comp_theme } from '@/utils/variables'


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
  IntroHeading

} from '@/styles/globalStyles'


// other imports
import SmoothScroll from '@/components/SmoothScroll'

// data imports
import { 
  WorkCarouselData,
  devData, 
  designData,
  ProjectData,
  ProjectData2,
  AboutData
} from '@/props/props';

// Component imports
import {MyButton} from '@/components/Button'
import { Footer } from '@/components/Footer'
import { WelcomeHeading } from '@/components/HomeHeading'
import { Tags } from '@/components/Tags'
import { ProjectInfo } from '@/components/ProjectInfo'
import {HeaderHam} from '@/components/HeaderHam'
import {Navigation} from '@/components/Navigation'
import { Animation } from '@/components/Animation'
import { AllAnimsCont, AnimationCont } from '@/styles/homeStyles'
import { MobCarousel } from '@/components/MobCarousel'
import { ScrollImage } from '@/components/ScrollImage'
import { DesignGrid } from '@/components/DesignGrid'
import { HeroContainer } from '@/styles/aboutStyles'
import { AboutMe } from '@/components/AboutMe'

export default function Home() {

const router = useRouter()
const {theme} = useTheme()
const themer = comp_theme[theme]
// state to keep track of current screen size
const [sWidth, setSwidth] = useState()


useEffect(()=>{
  window.onload=()=>{setSwidth(window.innerWidth)}
  window.onresize=()=>{setSwidth(window.innerWidth)}
  setSwidth(window.innerWidth)

// detecting when the screen resizes
},[sWidth])

const animPaths =[
'/animation/react.json',
'/animation/js.json',
'/animation/node.json',
'/animation/css3.json',
'/animation/figma.json',
'/animation/adobe.json',

]
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
    x:-1500
  },
  visible:{
    y: [0,-300,0,-200,0,-150,0,-100,0,-50,0,-30,0,-20,0,-10,0,-5,0],
    scale:[.2,1,.2,1,.2,1,.2,1,.2,1,.2,1,.2,1,.2,1,],
    x:0,
    rotate: [0, 0, 270, 270, 0],
    transition:{
      duration:2.5, 
      type:'spring', 
      damping:10

    }
  }
  ,
hover:{
  rotate: [0, 0, 270, 270, 0],
  transition:{duration:1, type:'spring'}
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
            />
        
      <Tags txt='</h1>'/>
      
      <Tags txt='<button>'/>
          <MyButton/>
      <Tags txt='</button>'/>
      
      </IntroHeading>
  
    <ScrollImage img={<>
      <AboutMe txt={AboutData.homeIntro} />
        <AllAnimsCont>
          {animPaths.map((o,i)=>(
            <AnimationCont
              key={i}
              variants={imgVariants}> 
              <Animation path={o} />
            </AnimationCont>
          ))}

        </AllAnimsCont>      
    
    </>} />

        
      
      
    {sWidth >=500? 
    <>
    <ScrollImage img={<>
      <Tags txt='<Img src="../'/>
          <ProjectInfo
            txtCol={themer.buzzTxt}
            heading='Buzzy Bee'
            stackData={techStackOne}
            description={ProjectData[0].description}
            img='/caseStudies/buzzy/buzzMockup.png'
            onButtClick={()=>{router.push('/projects/buzz')}}
          />
      <Tags txt='/>'/>    
      
      </>}/>

      
    <ScrollImage img={<> 
    
      <Tags txt='<Img src="../'/>
        <ProjectInfo
          onButtClick={()=>{router.push('/projects/eco')}}
          txtCol={themer.ecoHead}
          heading='EcoHow'
          stackData={techStackTwo}
          description={ProjectData2[0].description}
          order={-1}
          img='/caseStudies/ecohow/ecoHowHero.png'
      />

      <Tags txt='/>'/>
    </>} />

    <ScrollImage img={<> 
    
      <Tags txt='<Img src="../'/>
        <ProjectInfo
          txtCol={themer.accentTxt}
          heading='Mix Elixir'
          stackData={techStackTwo}
          img='/caseStudies/mixElix/mixElixir.png'
      />

      <Tags txt='/>'/>

      
    </>} />
    <DesignGrid/>
      </>
    :
    
      <>
        <MobCarousel imgData={WorkCarouselData}  dim={40} />  
        <DesignGrid/>
      </>}
    
          



      {/* <div style={{color:'white'}}>djbdskjadsbdsak</div> */}
      <Footer/> 
    </Wrapper>
  )
}
