import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
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
    HeroContainer, 
    AnimCont

} from '@/styles/projectStyles'


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
import { ProjectImageGrid } from '@/components/ProjectImgGrid'
import { ImageContainer } from '@/components/ImageCard'
import { MiniCarousel } from '@/components/MiniCarousel'
import { Animation } from '@/components/Animation'

export default function Project() {


const imageData1 =[
        '/caseStudies/buzzy/buzzPro1.png',
        '/caseStudies/buzzy/buzzPro2.png',
        '/caseStudies/buzzy/buzzPro3.png',
        '/caseStudies/buzzy/buzzPro4.png',
    ]
    
  const  imageData2 =[
        
    ]

const [toggle,setToggle] = useState(false)
const [hammer, setHammer]= useState(false)
const {theme,setTheme}= useTheme()
const themer = comp_theme[theme]
const [top, setScrollTop]=useState(0)
const [animTop,setAnimTop] = useState(0)
const [animLeft,setAnimLeft] = useState(0)

useEffect(()=>{
window.onscroll = ()=>{

    setScrollTop(window.scrollY)
    setAnimTop(window.scrollY)
    setTimeout(()=>{

        setAnimLeft(Math.floor((Math.random() * 1000) + 1))

    },2000)
    console.log(animTop)
}
},[animTop])
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

    <AnimCont
        top={animTop}
        left={animLeft}>
        <Animation/>
    </AnimCont>

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
        <ProjectHero width='50vw' src='/caseStudies/buzzy/buzzyUserResearch.png'/>


    <ProjectHeading 
        subCol={themer.menu}
        subHead={'Problem Identification'}/>
    
    {/* personas===================================== */}
    <ProjectHeading 
        subCol={themer.menu}
        subHead={'Personas'}/>
    <HeroContainer>
        <ProjectHero src='/caseStudies/buzzy/buzzyPerson1.png'/>
        <ProjectHero src='/caseStudies/buzzy/buzzyPerson2.png'/>
    </HeroContainer>

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
    {/* <Carousel 
        imgData={buzzDesign}
        dim={40}/> */}




    <ProjectHeading 
        subCol={themer.menu}
        subHead={'Development Process'}/>

        {/* Mind Maps and props etc  */}
        <ProjectImageGrid
            imageSet1={<MiniCarousel dim={40} imgData={imageData1}/>}/>

        {/* Development stuff  */}
        <ProjectImageGrid
            imageSet1={<ProjectHero src='/caseStudies/buzzy/buzzReact.png' />}/>


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
