import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
import { useTheme } from '@/utils/provider'
import { comp_theme } from '@/utils/variables'
import Router, { useRouter } from 'next/router'
import ReactPlayer from 'react-player/lazy'


// data imports 
import { ProjectData,ProjectData2 } from '@/props/props'

// styled components 
import { Header } from '@/styles/globalStyles'

import { 
    Wrapper,
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
import { GifContainer } from '@/components/GifContainer'
import { LottieControl } from '@/components/ScrollAnimation'
import { VideoContainer } from '@/components/VideoComp'
import { ScrollButton } from '@/components/ScrollTopButton'
import { SectionHeader } from '@/components/SectionHeaders'
import { ProjectTitle } from '@/components/MobCarousel/styles'

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
    window.onload=()=>{setSwidth(window.innerWidth)}
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
        <Wrapper 
            // bgCol={o.projectCol}
            key={i} >
        <Header>
        <ScrollButton/>
        
        <HeaderHam 
            onHamClick={()=>{ 
            setHammer(!hammer)
            setToggle(!toggle)
            }}
        
            ham={hammer} 
            setHam={setHammer} />
        </Header>
    
    
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
        
        {project==='buzz'&&
            // animation disabled if project is not BuzzyBee
            <AnimCont
                top={animTop < 300? animTop : 100 }
                left={animLeft}>
                <Animation path='/animation/bee.json'/>
            </AnimCont>
        }
    
        
        
        <ProjectHeading
            headCol={ o.titleCol}
            subCol={o.subHeadCol}
            mainHead={ o.projectTitle}
            subHead={o.subHead}
            />
        
        <HeroContainer>
        <ProjectDescrip
            width='90%'
            txtCol={o.descriptionCol} 
            mainHead={o.description}
            />
        <ProjectDescrip
            width='90%'
            txtCol={o.descriptionCol} 
            mainHead={o.description2}
            />

        </HeroContainer>
            
        
        <HeroContainer>
            {/* <ProjectHero 
            src={o.mockSource}
            width='100%'/> */}
            {
                sWidth>= 500 ? 
                <VideoContainer 
                // height='700px' 
                margin='5%'
                width={ sWidth>=500? '20%':'60%'} 
                src={o.heroVideo} />
                :
                <ProjectHero src={o.mockSource}/>
                
            }
            <ProjectHero 
            width='80%'
            src={o.processImage}/>
            
        </HeroContainer>
    
    {/* add a blur filter behind the hero image that depicts the project color */}
        
    
        {/* sections */}
        <SectionHeader heading={ sWidth>=500 ? 'Research + Analysis' : <ProjectHeading  subHead='Research'/> }/>

        {/* This is where I would add the videos */}
        <ProjectHero width='80vw' src={o.researchImage}/>
    
        <SectionHeader heading='Problem Identification'/>
        
        <ProjectDescrip 
            width='90%'
            mainHead={o.problemIdentification}
            txtCol={o.descriptionCol}  />
    
        <HeroContainer>
            {sWidth >= 500 ?
            <>
                <VideoContainer 
                // height='700px' 
                margin='5%'
                width={sWidth>=500? '30%':'60%' }
                src={o.solVideo1} />
            <VideoContainer 
                // height='700px' 
                margin='5%'
                width={sWidth>=500? '30%':'60%' }
                src={o.solVideo2} />
            </>
            :
            <ProjectHero src={o.problemImage} />
        
        }

        
        </HeroContainer>


        {/* personas===================================== */}
        <SectionHeader heading='Personas'/>

        <HeroContainer>
            <ProjectHero src={o.persona1}/>
            <ProjectHero src={o.persona2}/>
        </HeroContainer>
    
        {/* solution design======================================== */}
        <SectionHeader heading='Solution Design'/>

        <ProjectDescrip
            width='90%'
                txtCol={o.descriptionCol} 
                mainHead={o.solutionDesign}/>
        <HeroContainer>
        {sWidth >= 500 &&
        
            <VideoContainer 
            width={ sWidth>=500? '30%':'60%'} 
            margin='5%'
            src={o.solVideo3} />
        }
            
        </HeroContainer>

                
                {/* task models  */}
        <HeroContainer>
            <ProjectHero src={o.solutionProcess1}/>
            <ProjectHero
                src={o.solutionProcess2}/>
        </HeroContainer>
    
    
        <SectionHeader heading='Development Process'/>

    
            {/* Mind Maps and props etc  */}
            {/* checking if the screen size is mobile or desktop and displaying components accordingly */}
            {sWidth >= 550 &&
            <>
            {project==='eco' && <LottieControl/> }
            <ProjectImageGrid
                Default={<ProjectDescrip  txtCol={o.descriptionCol} font='18px' width='90%' mainHead={o.devProcess} /> }
                imageSet1={<MiniCarousel dim={40} imgData={o.devProArray}/>}/>
    
            {/* Development stuff  */}
            { project === 'buzz'&& <ProjectImageGrid
                imageSet1={<VideoContainer width='60%' src={o.devVideo} /> }
                Default= {<ProjectDescrip width='90%' font='18px' mainHead={o.devProcess2}/>}/>}

            </>
                }
            { sWidth<=500 && project==='buzz' &&  
                    <>
                    <HeroContainer>
                        <ProjectDescrip  
                            txtCol={o.descriptionCol}
                            font='18px' 
                            width='90%' 
                            mainHead={o.devProcess} />
                        <MobImageCarousel dim={40} imgData={imageData1} /> 
                        {/* <VideoContainer width='100%' src={o.devVideo} /> */}
                        <ProjectDescrip  
                            txtCol={o.descriptionCol}
                            font='18px' 
                            width='100%' 
                            mainHead={o.devProcess2} />
                    </HeroContainer>

                    </>
            } 

                {/* checking if the screen width is 500 or less and the project is buzz */}
            {project=== 'eco' && <> 
                <HeroContainer>
                
                </HeroContainer>  </> 
            }

        <SectionHeader heading='Testing + BugFixes'/>


        <HeroContainer>
            {o.test.map((el,i)=>(<ProjectHero key={i} src={el} />))}
        </HeroContainer>


        <SectionHeader heading='Presentation & Launch'/>

        {project==='buzz'&&
            
        <HeroContainer>
            <ReactPlayer  
            width={'100%'} url={'https://www.youtube.com/watch?v=xEDjZYRlzXk&ab_channel=AbhayBakshi'}/>
        </HeroContainer>

        }
        <Footer/>
        
    
    
        </Wrapper>
    ))}
    </>
)
}
