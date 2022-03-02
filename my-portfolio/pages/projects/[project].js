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
import { Header, MarginContainer } from '@/styles/globalStyles'

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
import { NextProject } from '@/components/NextProject'
import { Logo } from '@/components/Logo'
import { ProjectTeamInfo } from '@/components/ProjectTeamInfo'


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
const [animTop,setAnimTop] = useState(100)
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



// console.log(data)

const wrapperHam = ()=>
{
  if(hammer && toggle)
      {
            setHammer(!hammer)
            setToggle(!toggle)
      }
}


return (

    <>
    {data.map((o,i)=>(
        <Wrapper 
        onClick={sWidth>=500? wrapperHam: null }
            // bgCol={o.projectCol}
        key={i} >
        <Header blur='3px' >
        <ScrollButton/>
        <Logo/>
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
    <MarginContainer>

        {project==='buzz'&&
            // animation disabled if project is not BuzzyBee
            <AnimCont
                top={animTop < 400? animTop : 100 }
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
        </MarginContainer>
    


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
            <ProjectTeamInfo
                txtCol = {o.subHeadCol}
                headCol={o.subHeadCol}
                stackData={o.techStack}
                route={o.gitRoute}
                team={o.team}
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
        {sWidth>=500? <SectionHeader heading={'Research + Analysis'}/> : <ProjectHeading subCol={o.subHeadCol} subHead='Research + Analysis'  /> }

        {/* This is where I would add the videos */}
        <div style={{marginLeft:sWidth>=500? '10%':null }}>
            <ProjectHero width='80vw' src={o.researchImage}/>
        </div>


    
        {sWidth>=500? <SectionHeader heading={'Problem Identification'}/> : <ProjectHeading subCol={o.subHeadCol} subHead='Problem Identification'  /> }
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
        {sWidth>=500? <SectionHeader heading={'Personas'}/> : <ProjectHeading subCol={o.subHeadCol} subHead='Personas'/> }

        
        <HeroContainer>
            <ProjectHero src={o.persona1}/>
            <ProjectHero src={o.persona2}/>
        </HeroContainer>
    
        {/* solution design======================================== */}
        {sWidth>=500? <SectionHeader heading={'Solution Design'}/> : <ProjectHeading subCol={o.subHeadCol} subHead='Solution Design'/> }


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
    
    

        {sWidth>=500? <SectionHeader heading={'Development Process'}/> : <ProjectHeading subCol={o.subHeadCol} subHead='Development Process'/> }

    
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
            { sWidth<=500 && 
                    <>
                    <HeroContainer>
                        <ProjectDescrip  
                            txtCol={o.descriptionCol}
                            font='18px' 
                            width='90%' 
                            mainHead={o.devProcess} />
                        <MobImageCarousel dim={40} imgData={o.devProArray} /> 
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

        {sWidth>=500? <SectionHeader heading={'Testing + BugFixes'}/> : <ProjectHeading subCol={o.subHeadCol} subHead='Testing + BugFixes'/> }

        <HeroContainer>
            {o.test.map((el,i)=>(<ProjectHero key={i} src={el} />))}
        </HeroContainer>


        {sWidth>=500? <SectionHeader heading={'Presentation & Launch'}/> : <ProjectHeading subCol={o.subHeadCol} subHead='Presentation & Launch'/> }

        {project==='buzz'&&
            
        <HeroContainer>
            <ReactPlayer  
            width={'100%'} url={'https://www.youtube.com/watch?v=xEDjZYRlzXk&ab_channel=AbhayBakshi'}/>
        </HeroContainer>

        }
        <NextProject
            handleClick={()=>{ project==='eco'? router.push('/projects/buzz') :router.push('/projects/eco') }}
            headCol={themer.menu}  
            mainHead={'NEXT PROJECT'} /> 
        <Footer/>
        
    
    
        </Wrapper>
    ))}
    </>
)
}
