import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import styled from 'styled-components'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'


// styled components 
const Wrapper = styled.div`
display:flex;
flex-direction:column;
// height:100%;
// width:100%;
// background-color:white;
`

import { Container, Title } from '@/styles/projectStyles'


// other imports


// Component imports
import { Element } from '@/components/Element'
import { Navigation } from '@/components/Navigation'
import { HeaderHam } from '@/components/HeaderHam'
import { Section } from '@/components/Section'
import Loader from '@/components/Loader'
const  HTMLContent = ()=>
{
    return (
        <Section 
            factor={1.5}
            offset={1}>
        <group position={[0,200,0]}>
            <Html fullscreen>
                    <Container>
                        <Title> Yo!! </Title>
                    </Container>
            </Html>
        </group>
            
        </Section>    
        
    )
}

export default function Project() {


const [toggle,setToggle] = useState(false)
const [hammer, setHammer]= useState(false)
  return (
    <Wrapper>

    <HeaderHam 
        onHamClick={()=>{ 
        setHammer(!hammer)
        setToggle(!toggle)
        }}
    
        ham={hammer} 
        setHam={setHammer} />


    <Navigation 
    toggleMenu={toggle}  
    setToggleMenu={setToggle}
    hamClick={()=>
                {
                setHammer(!hammer)
                setToggle(!toggle)
                }}
    ham={hammer}
    />
    <Loader/>
    {/* <Canvas>
        <HTMLContent/>
    </Canvas> */}

    </Wrapper>
)
}
