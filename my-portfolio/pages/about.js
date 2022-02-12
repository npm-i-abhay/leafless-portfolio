import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

// styled components 
// const Wrapper = styled.div`
// display:flex;
// flex-direction:column;
// `

import { Wrapper, HeroContainer, AboutContent, CarouselCont } from '@/styles/aboutStyles'

const aboutMe = 'My name is Abhay Bakshi (ub-hey). I’m a full stack developer and designer specializing in streamlined interactive development. I have a keen interest in building engaging solutions that helps communities across the globe. I’m a consistent learner and I aspire to augument digital experiences '

// other imports
import { MenuReferences } from '@/props/props';
import { MenuReferences2 } from '@/props/props';


// Component imports
import {MyButton} from '@/components/Button'
import {Hamburger} from '@/components/Hamburger'
import { Carousel } from '@/components/Caraousel'
import { Footer } from '@/components/Footer'
import { WelcomeHeading } from '@/components/HomeHeading'
import { ImageContainer } from '@/components/ImageCard'
import { Tags } from '@/components/Tags'
import { AboutMe } from '@/components/AboutMe'
import { HeaderHam } from '@/components/HeaderHam'
import { Navigation } from '@/components/Navigation'


const Header = styled.div`
display:flex;
justify-content:flex-end;
`

export default function About() {

  var references = MenuReferences

  
  const [menu,setMenu] = useState(true)
  var references = MenuReferences
  
  if (menu === false) {
    references = MenuReferences2
  }
const imgData = [
  "/about/bcfs.png",
  "/about/personal1.png",
  "/about/sa1.jpeg",
  "/about/sa2.jpeg",
]
const [toggle,setToggle] = useState(false)
const [hammer, setHammer]= useState(false)
  return (
    <Wrapper>
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
    <WelcomeHeading lineOne='Hello there! Nice To Meet You'/>
    <HeroContainer>

              

                <ImageContainer imgUrl='/about/PPortrait.jpeg'/>

            <AboutContent>
                <AboutMe txt={aboutMe}/>
                <AboutMe txt={aboutMe}/>
            </AboutContent>

    </HeroContainer>
        

            <CarouselCont>

            <Carousel dim={ 40 } imgData={imgData} />
            </CarouselCont>
            <Footer/>
    </Wrapper>
  )
}
