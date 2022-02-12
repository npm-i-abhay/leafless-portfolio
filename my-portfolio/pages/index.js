import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import styled from 'styled-components'
import { useState } from 'react'

// styled components 
const Wrapper = styled.div`
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
import { info, MenuReferences } from '@/props/props';
import { MenuReferences2 } from '@/props/props';
import SmoothScroll from '@/components/SmoothScroll'

// Component imports
import {MyButton} from '@/components/Button'
import {Hamburger} from '@/components/Hamburger'
import { MyChart } from '@/components/Chart'
import { Carousel } from '@/components/Caraousel'
import { Footer } from '@/components/Footer'
import { Menu } from '@/components/Menu'
import { WelcomeHeading } from '@/components/HomeHeading'
import { ImageContainer } from '@/components/ImageCard'
import { Tags } from '@/components/Tags'
import { ProjectInfo } from '@/components/ProjectInfo'
import { Element } from '@/components/Element'
import {HeaderHam} from '@/components/HeaderHam'
import {Navigation} from '@/components/Navigation'


export default function Home() {

const techStackOne= 
[  
  '/tech/react.png',
  '/tech/javascript.png',
  '/tech/php.png',
  '/tech/expo.png',
  '/tech/styled.png',
  '/tech/next.png',
  '/tech/node.png',
  '/tech/npm.png',
]
const techStackTwo= 
[  
  '/tech/react.png',
  '/tech/javascript.png',
  '/tech/styled.png',
  '/tech/next.png',
  '/tech/node.png',
  '/tech/npm.png',
  '/tech/story.png',
]



  const [menu,setMenu] = useState(true)
  var references = MenuReferences
  
  if (menu === false) {
    references = MenuReferences2
  }

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
    <IntroHeading>

    
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
        <MyChart/>
      </ChartCont>

      <Tags txt='<Img src="../'/>
        <ProjectInfo
          stackData={techStackOne}
          img='/test/ss1.jpeg'
          description={info.buzzyBee}
       
          />
      <Tags txt='/>'/>

      <Tags txt='<Img src="../'/>
        <ProjectInfo
          stackData={techStackTwo}
          order={-1}
          img='/test/ss3.jpeg'
          description={info.buzzyBee}
          
          />
      <Tags txt='/>'/>



      {/* <div style={{color:'white'}}>djbdskjadsbdsak</div> */}
      <Footer/> 
    </Wrapper>
  )
}
