import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Wrapper = styled(motion.div)`
display:flex;
flex-direction:column;
height:100%;
`

export const HeroContainer = styled.div`
display:flex;
// border:2px solid red;
justify-content:space-around;

flex:1;
// // @media (max-width: 600px) {
//     flex-direction:column;
//     align-items:center;
// }
`

export const AboutContent = styled.div`
display:flex;
width:50%;
// background-color:blue;

`

export const CarouselCont = styled.div`
overflow:hidden;
margin-top:100px;
// background:red;
`