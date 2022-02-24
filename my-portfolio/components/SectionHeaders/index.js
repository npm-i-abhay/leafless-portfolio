import React, { useEffect, useState, useRef } from 'react'
import { motion, useViewportScroll } from "framer-motion"

// styled component imports 
import { 
    SectionWrapper,
    Line,
    Circle
} from './styles'

export const SectionHeader = () => {
    const ref = useRef()
    const { scrollYProgress } = useViewportScroll()
    const [scrollTop, setScrollTop] = useState()
useEffect(()=>{
window.onscroll=()=>{setScrollTop(window.scrollY )}
// console.log(ref.current.getBoundingClientRect())
},[scrollTop])

return (
    <SectionWrapper 
    viewport={{ once: true }} 
    initial={{height:0}}
    whileInView={{height:200, transition:{delay:.5,duration:1.5,type:'spring', staggerChildren:2}}}>
        <Line>
        </Line>
        <Circle initial={{opacity:0, width:0,height:0 }} animate={{opacity:1,width:60,height:60, originX:0, originY:0  }} transition={{delay:2, duration:1.5, type:'spring'}} ></Circle>
    </SectionWrapper>
  )
}


