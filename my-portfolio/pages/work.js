import React,{useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import styled from 'styled-components';
import { Router, useRouter } from 'next/router';
import { useTheme } from '@/utils/provider';
import { comp_theme, global_theme } from '@/utils/variables';



// styled components
import { MainCont,  Header, MarginContainer, } from '@/styles/globalStyles';
import { 
    CatButts, 
    CatCont, 
    CatName,
    BaseContainer,
    NavHeader,
    MobCategoryCont,
    ProjectsContainer,
    RevealContainer

} from '@/styles/workStyles';

// component imports
import { CarouselVerticle } from '@/components/CarouselVerticle';
import { MobCarousel } from '@/components/MobCarousel';
import { ProjectHeading } from '@/components/ProjectHeading';
import { HeaderHam } from '@/components/HeaderHam';
import { Navigation } from '@/components/Navigation';
import { Logo } from '@/components/Logo';
// data imports
import { WorkCarouselData,devData, designData, workDesignCarouselOne,workDesignCarouselTwo } from '@/props/props';
import { MobImageCarousel } from '@/components/MobImageCarousel';
import { SectionHeader } from '@/components/SectionHeaders';
import { WelcomeHeading } from '@/components/HomeHeading';



export default function Work  ({
    toggleMenu,
    
})  {
    const {theme,setTheme}= useTheme()
    const r = useRouter()
    const [reveal,setReveal] = useState({
        show:false,
        video:"/caseStudies/ecohow/ecoDev1.png",
        key:0
    })
    const [sWidth, setSwidth] = useState(null)
    const welcome = ['D','e','v','e','l','o','m','e','n','t']
useEffect(()=>{
    setSwidth(window.innerWidth)
 window.onresize=()=>{setSwidth(window.innerWidth)}
 console.log(sWidth)
},[sWidth])
// useEffect updating the the state of in real time as the window resizes to dynamically show components


const variants ={
// framer motion animation propertiesfor reveal container
    animate:{
        width:reveal.show ? 0 :"100%",
        transition:{
            type:'spring',
            duration:.5, 
            mass:.2, 
            damping:10 
        }
    },
    
}





const [toggle,setToggle] = useState(false)
const [hammer, setHammer]= useState(false)
const [source, setSource] = useState( 'helloo')
const [index, setIndex] = useState(0)
const [data, setData] = useState( {
    thumb:'/caseStudies/buzzy/buzzMock.png', 
    vid:null,
    path:'/'
})

const [category,setCategory] = useState('des')

const handleDev=()=>
{
    if(category != 'dev')
        {
            setCategory('dev')
        }
    
}
const handleDes=()=>{
    if(category != 'des')
        {
            setCategory('des')
        }
    
}

useEffect(()=>{setSource(data)},[data])
const wrapperHam = ()=>
{
  if(hammer && toggle)
      {
            setHammer(!hammer)
            setToggle(!toggle)
      }
}

return <>

{sWidth >= 800?
    <MainCont
        onClick={sWidth>=500? wrapperHam: null }
        bgCol={global_theme[theme].body}
        initial={{x:"-100%"}}
        exit={{x:"-100%"}}
        animate={{x:toggleMenu?0:0}}
        transition={{duration:.8,ease:[.6,.05,-.01,.9]}}
        >
    <BaseContainer>
    

        <NavHeader>
                <Header>
                    <Logo/>
                    <HeaderHam 
                        onHamClick={()=>{ 
                        setHammer(!hammer)
                        setToggle(!toggle)}}
                        ham={hammer} 
                        />
                </Header>

                <Navigation toggleMenu={toggle}  
                    setToggleMenu={setToggle}
                    myHam = {hammer}
                    hamClick={()=>
                            {
                            setHammer(!hammer)
                            setToggle(!toggle)
                            }}/>
        </NavHeader>
        

    
        <ProjectsContainer>
        
        <CatCont>
            <CatButts
                onClick={handleDev}
                bg ={category == 'dev'? comp_theme[theme].menu:null }
                txtCol={comp_theme[theme].mainTxt}>  
                <CatName> Development </CatName>
            </CatButts>

            <CatButts
                onClick={handleDes}
                bg ={category == 'des'? comp_theme[theme].menu:null }
                txtCol={comp_theme[theme].mainTxt}>
                <CatName> Design </CatName> 
            </CatButts>

        </CatCont>
        <motion.div 
            onHoverStart={()=> {  
            setReveal({show: true})
            }}
            onHoverEnd={()=> setReveal({
            show: false,
            })}
        >
            <CarouselVerticle
                onClick={()=>{r.push(data.path)}}
                dim={250} 
                imgData={category == 'dev'? devData:designData } 
                index={index} 
                setIndex={setIndex}
                data={data}
                setData={setData} />
        </motion.div>

        </ProjectsContainer>

        <RevealContainer 
            bgReveal={comp_theme[theme].footer}>
            <motion.div 
                className='reveal'
                variants={variants}
                animate='animate'
                >
            </motion.div>
            
            <div className='video'> 
        {category ==='dev'? //checking if the selected category is design ir dev 
        <>
        
            <AnimatePresence 
                initial={false}
                exitBeforeEnter>

                <motion.video
                loop={'true'}
                autoPlay={'true'}
                style={{
                    objectFit:'contain', 
                    width:'100vw',
                    height:'100%',
                    
                }} 
                    key={index}
                    src={source.vid}
                    initial={{opacity:0}}
                    exit={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:.2, ease:'easeInOut'}}
                    />
            </AnimatePresence>
        </>: //checking if the selected category is design ir dev
            <AnimatePresence 
                initial={false}
                exitBeforeEnter>

                <motion.img
                style={{
                    objectFit:'contain', 
                    width:'100vw',
                    height:'100%',
                    
                }} 
                    key={index}
                    src={source.vid}
                    initial={{opacity:0}}
                    exit={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:.2, ease:'easeInOut'}}
                    />
            </AnimatePresence>}
                {/* you can add animate presence that is a built in function in framer motion to detect when a component unmounts to make it smooth when switiching between links */}

                {/* <video src={require('../../public/videoOne.mp4')}
                loop
                autoPlay > 
                </video> */}
            </div>
        </RevealContainer>
    </BaseContainer>
</MainCont> 
: 

<> 

    <NavHeader>
        <Header>
        
            <Logo/>

            <HeaderHam 
                onHamClick={()=>{ 
                setHammer(!hammer)
                setToggle(!toggle)}}
                ham={hammer} 
                />
        </Header>

        <Navigation toggleMenu={toggle}  
            setToggleMenu={setToggle}
            myHam = {hammer}
            hamClick={()=>
                    {
                    setHammer(!hammer)
                    setToggle(!toggle)
                    }}/>
        </NavHeader>


    <MobCategoryCont
        
        >
        {/* <SectionHeader heading={'Development Projects'} />  */}
        Development Projects
    
        
        
        {/* <ProjectHeading headCol='#8B3AF3' mainHead={'Development Projects'} />  */}
    </MobCategoryCont>


    <MobCarousel imgData={WorkCarouselData} dim={40}/>
    <ProjectHeading headCol='#8B3AF3' mainHead={'Design Projects'} /> 
    <MobImageCarousel 
    imgData={workDesignCarouselOne} dim={40}/>
    <MobImageCarousel 
    imgData={workDesignCarouselTwo} dim={40}/>

</>}
  
  </>
};




