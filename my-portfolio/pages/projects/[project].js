import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
import { useTheme } from '@/utils/provider'
import { comp_theme } from '@/utils/variables'
import Router, { useRouter } from 'next/router'



// data imports 
import { ProjectData,ProjectData2 } from '@/props/props'

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
import { MobImageCarousel } from '@/components/MobImageCarousel'

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
const [sWidth, setSwidth] = useState(0)

const [data,setData] = useState(ProjectData)
const router = useRouter()
// constant to detect the dynamic query made by visitor and change the state based upon what project is chosen
const {project} = router.query
useEffect(()=>{
    if (project === 'eco')
{
    setData (ProjectData2)
}
else if (project == 'buzz')
{
    setData(ProjectData)
}

},[project])
// use effect to monitor the query made by the visitor.


useEffect(()=>{
    
    setSwidth(window.innerWidth)
    window.onresize=()=>{setSwidth(window.innerWidth)}
    console.log(sWidth)
      // detecting when the screen resizes

window.onscroll = ()=>{

    setScrollTop(window.scrollY)
    setAnimTop(window.scrollY)
    setTimeout(()=>{

        setAnimLeft(Math.floor((Math.random() * sWidth >=700? 1000:200) + 1))
        // setting the left position of the animation based on the current screen size
    },2000)
    console.log(animTop)
}
},[animTop, sWidth])



console.log(data)

return (

    <>
    {data.map((o,i)=>(
        <Wrapper key={i} >

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
            <Animation path='/animation/bee.json'/>
        </AnimCont>
    
        <ProjectHeading
            headCol={themer.mainTxt}
            subCol={themer.mainTxt}
            mainHead={o.projectTitle}
            subHead={o.subHead}
            />
        <ProjectDescrip 
            mainHead={o.description}/>
        
        <HeroContainer>
            <ProjectHero 
            src={o.mockSource}
            width='100%'/>
            <ProjectHero 
            width='80%'
            src={o.processImage}/>
        </HeroContainer>
    
    {/* add a blur filter behind the hero image that depicts the project color */}
        
    
        {/* sections */}
        <ProjectHeading 
            subCol={themer.menu}
            subHead={'Research + Analysis'}/>
        {/* This is where I would add the videos */}
            <ProjectHero width='50vw' src={o.researchImage}/>
    
    
        <ProjectHeading 
            subCol={themer.menu}
            subHead={'Problem Identification'}/>
        
        {/* personas===================================== */}
        <ProjectHeading 
            subCol={themer.menu}
            subHead={'Personas'}/>
        <HeroContainer>
            <ProjectHero src={o.persona1}/>
            <ProjectHero src={o.persona2}/>
        </HeroContainer>
    
        {/* solution design======================================== */}
        <ProjectHeading 
            subCol={themer.menu}
            subHead={'Solution Design'}/>
        <ProjectDescrip 
            mainHead={o.solutionDesign}/>
                
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
            {sWidth >= 550 ?
            <>
            <ProjectImageGrid
                imageSet1={<MiniCarousel dim={40} imgData={imageData1}/>}/>
    
            {/* Development stuff  */}
            <ProjectImageGrid
                imageSet1={<ProjectHero src='/caseStudies/buzzy/buzzReact.png' />}/>
            </>
                : <MobImageCarousel dim={40} imgData={imageData1} /> }
        <ProjectHeading 
            subCol={themer.menu}
            subHead={'Testing + Bug Fixes'}/>
        <ProjectHero src='/caseStudies/buzzy/buzzTest.png'/>
        <ProjectHeading 
            subCol={themer.menu}
            subHead={'Presentation & Launch'}/>
    
        <Footer/>
        
        {/* <Loader/> */}
        {/* <Canvas>
            <HTMLContent/>
        </Canvas> */}
    
        </Wrapper>
    ))}
    </>
)
}
