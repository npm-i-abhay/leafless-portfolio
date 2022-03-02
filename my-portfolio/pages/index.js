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
import { Wrapper } from '@/styles/homeStyles'

import { 
  IntroHeading,
  Header,
  MarginContainer
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
  AboutData,
  animPaths,
  techStackOne,
  techStackTwo,
  mainVariants,
  imgVariants, 
  designCatData,
  designStack,
  mixElixir,
  moveMe,
  young
} from '@/props/props';

// Animation variants
import { } from '@/props/props'

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
import { CircleIndicator, SectionHeader } from '@/components/SectionHeaders'
import { ScrollButton } from '@/components/ScrollTopButton'
import { ProjectHeading } from '@/components/ProjectHeading'
import { AnimateOnce } from '@/components/AnimateOnce'
import { DesignCategory } from '@/components/DesignCategory'
import { Logo } from '@/components/Logo'
import { BsConeStriped } from 'react-icons/bs'


export default function Home() {

const router = useRouter()
const {theme} = useTheme()
const themer = comp_theme[theme]
// state to keep track of current screen size
const [sWidth, setSwidth] = useState()


useEffect(()=>{
  window.onload=()=>{setSwidth(window.innerWidth)}
  window.onresize=()=>{setSwidth(window.innerWidth)}
  console.log(sWidth)
  console.log(window.innerWidth)
// detecting when the screen resizes
},[sWidth])

  
  const [toggle,setToggle] = useState(false)
  const [hammer, setHammer]= useState(false)



const wrapperHam = ()=>
{
  if(hammer && toggle)
      {
            setHammer(!hammer)
            setToggle(!toggle)
      }
}

  return (
    <Wrapper
      onClick={sWidth>=500? wrapperHam: null }
      variants={mainVariants}
      initial='hidden'
      animate='visible'
    >
      <ScrollButton/>
      <Header blur='3px' >
        <Logo/>
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
    <MarginContainer>

    <IntroHeading>
    
    {/* <LottieControl/> */}
      <Tags  txt='<h1>'/>
          <WelcomeHeading
            />
        
      <Tags txt='</h1>'/>
      
      <Tags txt='<button>'/>
          <MyButton onButtClick={()=>{window.location = "mailto:abhaybakshi8@gmail.com"}} txt='Hire Me!' />
      <Tags txt='</button>'/>
      
      </IntroHeading>
      </MarginContainer>
  
      {sWidth <= 550 && 
      <AboutMe txt={AboutData.homeIntroMob} />
      }


    <ScrollImage 
    img={<>
      {sWidth >=550 && 
      <AboutMe txt={AboutData.homeIntro} />
      }
        <AllAnimsCont>
          {animPaths.map((o,i)=>(
            <AnimationCont
              key={i}
              variants={imgVariants}> 
              <AnimateOnce path={o} />
            </AnimationCont>
          ))}

        </AllAnimsCont>      
    
    </>} />

        
      
      
    {sWidth >=500? 
    <>
    <SectionHeader
      heading="Development Projects"
      />
    <ScrollImage 
    img={<>
      <Tags txt='<Img src="../'/>
          <ProjectInfo
            txtCol={themer.menu}
            heading='Buzzy Bee'
            stackData={techStackOne}
            description={ProjectData[0].description}
            img='/caseStudies/buzzy/buzzMockup.png'
            txt='View Case Study'
            onButtClick={()=>{router.push('/projects/buzz')}}
            sourceRoute={ProjectData[0].gitRoute}
            justify='center'
            displayGit='none'
          />
      <Tags txt='/>'/>    
      
      </>}/>

      
    <ScrollImage img={<> 
    
      <Tags txt='<Img src="../'/>
        <ProjectInfo
          onButtClick={()=>{router.push('/projects/eco')}}
          txtCol={themer.menu}
          heading='EcoHow'
          stackData={techStackTwo}
          description={ProjectData2[0].description}
          order={-1}
          img='/caseStudies/ecohow/ecoHowHero.png'
          txt='View Case Study'
          sourceRoute={ProjectData2[0].gitRoute}
          justify='center'
          displayGit='none'
      />

      <Tags txt='/>'/>
    </>} />

    <ScrollImage img={<> 
    
      <Tags txt='<Img src="../'/>
        <ProjectInfo
          txtCol={themer.menu}
          heading='Mix Elixir'
          description={mixElixir.description}
          stackData={mixElixir.techStack}
          img='/caseStudies/mixElix/mixElixir.png'
          display='none'
          justify='center'
          gitWidth='500px'
          sourceRoute={mixElixir.gitRoute }
      />

      <Tags txt='/>'/>

      
    </>} />
    <ScrollImage img={<> 
    
      <Tags txt='<Img src="../'/>
        <ProjectInfo
          txtCol={themer.menu}
          heading='Young Academics'
          description={young.description}
          stackData={young.techStack}
          img='/caseStudies/young.png'
          display='none'
          justify='center'
          sourceRoute={young.gitRoute}
      />

      <Tags txt='/>'/>

      
    </>} />
    <SectionHeader
      heading="Design Projects"

    />
    {/* <DesignGrid/> */}
    <ScrollImage img={ <> 
      <Tags txt='<Img src="../'/>
      <DesignCategory 
        txt='Interactive Showcase'
        description={designCatData.description}
        stackData={designCatData.designStack }
        onButtClick={()=>{router.push('/work')}}
      /> 
      <Tags txt="/>"/>
    </> } />
      </>
    :
    
      <>
        <ProjectHeading headCol='#8B3AF3' mainHead={'Development Projects'} /> 
        <MobCarousel imgData={WorkCarouselData}  dim={40} />  
        <ProjectHeading headCol='#8B3AF3' mainHead={'Design Projects'} /> 
        <ScrollImage img={ <> 
      <Tags txt='<Img src="../'/>
      <DesignCategory 
        txt='Interactive Showcase'
        description={designCatData.descriptionMob}
        stackData={designCatData.designStack }
        onButtClick={()=>{router.push('/work')}}
      /> 
      <Tags txt="/>"/>
    </> } />
        
            

        {/* <DesignGrid/> */}
      </>}
      {/* <div style={{color:'white'}}>djbdskjadsbdsak</div> */}
      <Footer/> 
    </Wrapper>
  )
}
