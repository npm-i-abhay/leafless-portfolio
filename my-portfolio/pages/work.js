import React,{useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import styled from 'styled-components';
import { Router, useRouter } from 'next/router';


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

// import { Nav, NavHeader,CloseNav, NavList, NavVideos } from './styles';
const Header = styled.div`
display:flex;
justify-content:flex-end;
border:2px solid red;
width:87vw;
`
const links =[
    {
        id:0,
        title:"Home",
        link:'/'
    },
    {
        id:1,
        title:"About",
        link:'/about'
    },
    {
        id:2,
        title:"Work",
        link:'/work'
    },
    {
        id:4,
        title:"Resume",
        link:'/resume'
    },
]

export default function Work  (
    {

    toggleMenu,
    setToggleMenu,
    hamClick=()=>{}},
    ham
    
    )  {
    const r =useRouter()
    const [reveal,setReveal] = useState({
        show:false,
        video:"",
        key:0
    })

const newData = [
  "/test/Col1.jpeg",
  "/test/Col2.jpeg",
  "/test/ss1.jpeg",
  "/test/ss3.jpeg",
  "/test/ss3.jpeg",
  "/test/ss1.jpeg",
]
const [toggle,setToggle] = useState(false)
const [hammer, setHammer]= useState(false)
const [source, setSource] = useState("")
const [index, setIndex] = useState(0)
const [data, setData] = useState("")


    useEffect(()=>{setSource(data)},[data])

  return <>

    <MainCont
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
        <NavList>


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
                imgData={newData} 
                index={index} 
                setIndex={setIndex}
                data={data}
                setData={setData} />
        </motion.div>
{/* add a filtering algorithim to filter our the projects based on categories */}

        </NavList>
        <NavVideos  >
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




