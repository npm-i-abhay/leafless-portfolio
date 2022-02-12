import React,{useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import styled from 'styled-components';
import { Router, useRouter } from 'next/router';
import { useTheme } from '@/utils/provider';
import { comp_theme, global_theme } from '@/utils/variables';

import { HeaderHam } from '@/components/HeaderHam';
import { Navigation } from '@/components/Navigation';
// styled components
import { 
    Container, 
    Flex, 
    NavHeader,
    NavList, 
    NavVideos, 
    MainCont } from '@/styles/globalStyles';
import { CarouselVerticle } from '@/components/CarouselVerticle';
import { MyButton } from '@/components/Button';
import { CatButts, CatCont, CatName } from '@/styles/workStyles';

// import { Nav, NavHeader,CloseNav, NavList, NavVideos } from './styles';
const Header = styled.div`
display:flex;
justify-content:flex-end;
// border:2px solid red;
width:87vw;
`


export default function Work  (
    {

    toggleMenu,
    setToggleMenu,
    hamClick=()=>{}},
    ham
    
    )  {
    const {theme,setTheme}= useTheme()
    const r =useRouter()
    const [reveal,setReveal] = useState({
        show:false,
        video:"",
        key:0
    })
    const [sWidth, setSwidth] = useState(null)

useEffect(()=>{
    setSwidth(window.innerWidth)
 window.onresize=()=>{setSwidth(window.innerWidth)}
 console.log(sWidth)
},[sWidth])
// useEffect updating the the state of in real time as the window resizes to dynamically show components




const newData = [
  "/test/Col1.jpeg",
  "/test/Col2.jpeg",
  "/test/ss1.jpeg",
  "/test/ss3.jpeg",
  "/test/ss3.jpeg",
  "/test/ss1.jpeg",
]
const newData_two = [
    "/test/ss3.jpeg",
    "/test/ss1.jpeg",
    "/test/Col2.jpeg",
    "/test/ss3.jpeg",
    "/test/ss1.jpeg",
    "/test/Col1.jpeg",
]
const [toggle,setToggle] = useState(false)
const [hammer, setHammer]= useState(false)
const [source, setSource] = useState("")
const [index, setIndex] = useState(0)
const [data, setData] = useState("")

const [category,setCategory] = useState('dev')

const handleDev=()=>{
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

  return <>

    <MainCont
        bgCol={global_theme[theme].body}
        initial={{x:"-100%"}}
        exit={{x:"-100%"}}
        animate={{x:toggleMenu?0:0}}
        transition={{duration:.8,ease:[.6,.05,-.01,.9]}}
        >
    <Container>
        <NavHeader>
            <Flex spaceBetween noHeight>
                <Header>

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
            </Flex>
        </NavHeader>
    {sWidth >= 800?
        <NavList>
        <CatCont>
            <CatButts
                onClick={handleDev}
                bg ={category == 'dev'? comp_theme[theme].footer:null }
                txtCol={comp_theme[theme].mainTxt}>  
                <CatName> Development </CatName>
            </CatButts>

            <CatButts
                onClick={handleDes}
                bg ={category == 'des'? comp_theme[theme].footer:null }
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
                // onClick={handleSource}
                dim={250} 
                imgData={category == 'dev'? newData:newData_two } 
                index={index} 
                setIndex={setIndex}
                data={data}
                setData={setData} />
        </motion.div>

        </NavList>
:null}
        <NavVideos 
            bgReveal={comp_theme[theme].footer}>
            <motion.div 
                className='reveal'
                animate={{width:reveal.show ? 0 :"100%"}}>
            </motion.div>
            
            <div className='video'> 
            <AnimatePresence 
                initial={false}
                exitBeforeEnter>

                <motion.img
                style={{objectFit:'contain'}} 
                    key={index}
                    src={source}
                    initial={{opacity:0}}
                    exit={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:.2, ease:'easeInOut'}}
                    />
            </AnimatePresence>
                {/* you can add animate presence that is a built in function in framer motion to detect when a component unmounts to make it smooth when switiching between links */}

                {/* <video src={require('../../public/videoOne.mp4')}
                loop
                autoPlay > 
                </video> */}
            </div>
        </NavVideos>
    </Container>
  </MainCont> 
  
  </>
};




