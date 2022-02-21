import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import animationData from "@/public/animation/rock.json";
// styled components 
// const Wrapper = styled.div`
// display:flex;
// flex-direction:column;
// `

import { Wrapper, HeroContainer, AboutContent, CarouselCont } from '@/styles/aboutStyles'

const aboutMe = 'My name is Abhay Bakshi (ub-hey). I’m a full stack developer and designer specializing in streamlined interactive development. I have a keen interest in building engaging solutions that helps communities across the globe. I’m a consistent learner and I aspire to augument digital experiences '

// other imports


// Component imports
import { Footer } from '@/components/Footer'
import { WelcomeHeading } from '@/components/HomeHeading'
import { ImageContainer } from '@/components/ImageCard'
import { Tags } from '@/components/Tags'
import { AboutMe } from '@/components/AboutMe'
import { HeaderHam } from '@/components/HeaderHam'
import { Navigation } from '@/components/Navigation'
import { ProjectHero } from '@/components/ProjectHero'
import { ScrollImage } from '@/components/ScrollImage'
import { ScrollImageTwo } from '@/components/ScrollImageTwo'
import { Animation } from '@/components/Animation'
import { LottieControl } from '@/components/ScrollAnimation'
import { RockControl } from '@/components/RockScrollAnimation'
import  Slider  from '@/components/MobSlider'
import { MiniCarousel } from '@/components/MiniCarousel'
import { MobImageCarousel } from '@/components/MobImageCarousel'
const Header = styled.div`
display:flex;
justify-content:flex-end;
`

export default function About() {

const imgData = 
[
  "/about/sa1.jpeg",
  "/about/sa2.jpeg",
]
const imgData2 = 
[
  "/about/bcfs.png",
  "/about/personal1.png",
]
const imgData3 = 
[
  "/about/music2.jpeg",
  "/about/synth.png",
]
const [toggle,setToggle] = useState(false)
const [hammer, setHammer]= useState(false)
const [left,setLeft] = useState(-1000)
const [sWidth, setSwidth] = useState(0)
const [desk, setDesk] = useState(true)

useEffect(()=>{
  setSwidth(window.innerWidth)
window.onresize=()=>{setSwidth(window.innerWidth)}
// detecting when the screen resizes
},[sWidth])

const variants = {
  hidden:{
    x:-1000
  },
  visible:{
    x: 0,
    transition:{
      duration:.5, type:'spring', stiffness:50
    }
  }
}

// varients allows us to
// 1) organize the code a bit better
// 2) pass the name of the parent motion container's initial=''hidden and animate='visible' down to each and every motion children within that container so we don't have to specify those 2 lines again as long as the children's variant's key's are the same 

  return (
    <Wrapper
    variants={variants}
    initial='hidden'
    animate='visible'>
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

              


      <HeroContainer>
        <WelcomeHeading lineOne='Hello there! Nice To Meet You'/>
      </HeroContainer>
      { sWidth >=650 ? 
        // checking if the screen width is
    <>
              <ImageContainer imgUrl='/about/PPortrait.jpeg'/>
              <AboutContent>
                  <AboutMe txt={aboutMe}/>
                  <AboutMe txt={aboutMe}/>
              </AboutContent>
          <ScrollImage img={imgData.map((o,i)=>(<ProjectHero key={i} src={o} />))} />
          <ScrollImageTwo img={<Animation path='/animation/lead.json' />} />
          <ScrollImage img={imgData2.map((o,i)=>(<ProjectHero key={i} src={o} />))} />
          <HeroContainer>
            <RockControl/>
            <ProjectHero src='/about/music3.jpeg'/>
          </HeroContainer>
          <ScrollImage img={imgData3.map((o,i)=>(<ProjectHero key={i} src={o} />))} />
        {/* <Slider  /> */}

    </>
    :
    <>
        <HeroContainer>
          <ImageContainer imgUrl='/about/PPortrait.jpeg'/>
        </HeroContainer>

        <AboutContent>
            <AboutMe txt={aboutMe}/>
        </AboutContent>

        <ScrollImage direction='column' img={ <ImageContainer imgUrl="/about/sa1.jpeg"/> } />
        <ScrollImage img={<Animation path='/animation/lead.json' />} />
        <ScrollImage direction='column' img={ <ImageContainer imgUrl="/about/sa2.jpeg" /> } />
        <HeroContainer>
            <ProjectHero src='/about/music3.jpeg'/>
        </HeroContainer>
        <HeroContainer>
            <RockControl/>
        </HeroContainer>

        {/* <Slider  /> */}
        <MobImageCarousel dim={40} />


    </> 
    }
      <Footer/>
    </Wrapper>
  )
}
