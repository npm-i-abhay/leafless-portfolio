import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import styled from 'styled-components'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useTheme } from '@/utils/provider'
import { comp_theme } from '@/utils/variables'

// styled components 
const Wrapper = styled.div`
display:flex;
flex-direction:column;
// height:100%;
// width:100%;
// background-color:white;
`

import { 
    Container, 
    Title, 
    HeroContainer } from '@/styles/projectStyles'


// other imports
    // data for carousel
    import { buzzDesign } from '@/props/props'

// Component imports
import { Element } from '@/components/Element'
import { Navigation } from '@/components/Navigation'
import { HeaderHam } from '@/components/HeaderHam'
import { Section } from '@/components/Section'
import Loader from '@/components/Loader'
import { ProjectHeading } from '@/components/ProjectHeading'
import { ProjectDescrip } from '@/components/ProjectDescrip'
import { ProjectHero } from '@/components/ProjectHero'
import { Footer } from '@/components/Footer'
import { Carousel } from '@/components/Caraousel'

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
const {theme,setTheme}= useTheme()
const themer = comp_theme[theme]

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

    <ProjectHeading
        headCol={themer.mainTxt}
        subCol={themer.mainTxt}
        mainHead={'Buzzy Bee'}
        subHead={'Helping you find time to do what you love!'}
        />
    <ProjectDescrip 
        mainHead={`Buzzy Bee is a native organizer application that fetches data from the school’s portal (mocked) and automatically adds the student’s course schedule to the built in calendar. The user can: create groups and the app will compare members’ schedules and provide the user with times when everyone is available.create tasks ( Personal, Academic, Group) and add them to the built-in calendar.`}/>
    
    <HeroContainer>
        <ProjectHero 
        src='/caseStudies/buzzy/buzzMock.png'
        width='100%'/>
        <ProjectHero 
        width='80%'
        src='/caseStudies/buzzy/buzzyProcess.png'/>
    </HeroContainer>

{/* add a blur filter behind the hero image that depicts the project color */}
    

    {/* sections */}
    <ProjectHeading 
        subCol={themer.menu}
        subHead={'Research + Analysis'}/>
    {/* This is where I would add the videos */}

    <ProjectHeading 
        subCol={themer.menu}
        subHead={'Problem Identification'}/>
    
    <ProjectHeading 
        subCol={themer.menu}
        subHead={'Personas'}/>

    {/* solution design======================================== */}
    <ProjectHeading 
        subCol={themer.menu}
        subHead={'Solution Design'}/>
    <ProjectDescrip 
        mainHead={`Buzzy Bee is a native organizer application that fetches data from the school’s portal (mocked) and automatically adds the student’s course schedule to the built in calendar. The user can: create groups and the app will compare members’ schedules and provide the user with times when everyone is available.create tasks ( Personal, Academic, Group) and add them to the built-in calendar.`}/>
            
            {/* task models  */}
    <HeroContainer>
        <ProjectHero src='/caseStudies/buzzy/buzzyModOne.png'/>
        <ProjectHero
            src='/caseStudies/buzzy/buzzyModTwo.png'/>
    </HeroContainer>
    
            {/* prototypes */}
    <div style={{color:'white'}}> PROTOTYPE </div>
    <Carousel 
        imgData={buzzDesign}
        dim={40}/>




    <ProjectHeading 
        subCol={themer.menu}
        subHead={'Development Process'}/>
    
    <ProjectHeading 
        subCol={themer.menu}
        subHead={'Testing + Bug Fixes'}/>
    
    <ProjectHeading 
        subCol={themer.menu}
        subHead={'Presentation & Launch'}/>

    <Footer/>
    
    {/* <Loader/> */}
    {/* <Canvas>
        <HTMLContent/>
    </Canvas> */}

    </Wrapper>
)
}
