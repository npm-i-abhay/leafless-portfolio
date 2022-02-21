import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Wrapper = styled(motion.div)`
display:flex;
flex-direction:column;
height:100%;
`

export const HeroContainer = styled.div`
display:flex;
justify-content:space-evenly;
flex:1;
// // @media (max-width: 600px) {
//     flex-direction:column;
//     align-items:center;
// }
`

export const AboutContent = styled.div`
display:flex;
justify-content:space-evenly;
flex:.5;
// width:30%;
// background-color:blue;

`

export const CarouselCont = styled.div`
overflow:hidden;
margin-top:100px;
// background:red;
`