import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import styled from 'styled-components'
import { useState } from 'react'

// styled components 
const Wrapper = styled.div`
height:1400px;
display:flex;
flex-direction:column;
// align-items:center;
justify-content:space-between;
`
const Header = styled.div`
// border:2px solid blue;
display:flex;
justify-content:flex-end;
`


// other imports
import { MenuReferences } from '@/props/props';
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

      <MyChart/>
      {/* <Element/> */}

      <Tags txt='<Img src="../'/>
        <ImageContainer/>
      <Tags txt='/>'/>
      <ProjectInfo/>


      {/* <div style={{color:'white'}}>djbdskjadsbdsak</div> */}
      <Footer/> 
    </Wrapper>
  )
}
