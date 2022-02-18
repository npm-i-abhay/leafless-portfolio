import React,{useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';

import { HeaderHam} from '../HeaderHam';

// styled components
import { Container, Flex } from '@/styles/globalStyles';
import { Nav, NavHeader,CloseNav, NavList, NavVideos, HamIconCont } from './styles';

export const Navigation = (
    {
    toggleMenu,
    setToggleMenu,
    hamClick=()=>{}},
    myHam,
    links =[
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
    
    ) => {
    const r =useRouter()

    console.log(r)
    const [reveal,setReveal] = useState({
        show:false,
        video:"",
        key:0
    })
    const {theme, setTheme} = useTheme()

  return <>
    <AnimatePresence>
    {toggleMenu && 
    <Nav
        initial={{x:"-100%"}}
        exit={{x:"-100%"}}
        animate={{x:toggleMenu?0:100}}
        transition={{duration:.8,ease:[.6,.05,-.01,.9]}}
        listBG={comp_theme[theme].menu}
        >
    <Container>
        <NavHeader>
                <HeaderHam
                    ham={myHam}
                    onHamClick={hamClick}/>       
        </NavHeader>
        <NavList  linkCol={comp_theme[theme].mainTxt}>
            <ul>
                {links.map((o,i)=> (<motion.li
                                        key={i}
                                        >
                    <motion.div 
                        className='link'
                        initial={{x:-108}}
                        whileHover={{x:-40}}
                        
                        >
                    <div onClick={()=>r.push(o.link)}>
                        <span className='arrow'>
                        {
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 101 57"
                                >
                                <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#FFF"
                                fillRule="evenodd"
                                ></path>
                                </svg>
                        }
                        </span>
                        {o.title}
                    </div>
                    </motion.div>
                </motion.li>))}
                
            </ul>
        </NavList>
        <NavVideos  
            revealBG={comp_theme[theme].menu}>
            <motion.div 
            className='reveal'
            animate={{width:reveal.show ? 0 :"100%"}}>
            </motion.div>
            
            <div className='video'> helloo
                
                {/* you can add animate presence that is a built in function in framer motion to detect when a component unmounts to make it smooth when switiching between links */}

                {/* <video src={require('../../public/videoOne.mp4')}
                loop
                autoPlay > 
                </video> */}
            </div>
        </NavVideos>
    </Container>
  </Nav> }
  </AnimatePresence>
  </>
};
