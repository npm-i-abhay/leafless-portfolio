import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import styled from 'styled-components'
import { useState } from 'react'

// styled components 
const Wrapper = styled.div`

`


// other imports
import { MenuReferences } from '@/props/props';
import { MenuReferences2 } from '@/props/props';


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



export default function About() {

  const [menu,setMenu] = useState(true)
  var references = MenuReferences
  
  if (menu === false) {
    references = MenuReferences2
  }


  return (
    <Wrapper>
        { references.map ((o,i)=> <Menu 
                                        key={i}
                                        rightHam={o.rightPositionChain}
                                        rightPosition={o.rightPositionChain}
                                        revealMenu={o.revealMenuChain}
                                        menuHeight={o.menuHeightChain}
                                        menuBg={o.menuBgChain}
                                        contVisble={o.contVisbleChain}
                                        transLine1={o.transLine1Chain}
                                        transLineOp2={o.transLineOp2Chain}
                                        transLine3={o.transLine3Chain}
                                        onClick={()=> setMenu(!menu)}
                                        />)
        }
        
        <WelcomeHeading 
            lineOne='Hello there! Nice To Meet You'/>

            <ImageContainer/>

    </Wrapper>
  )
}
