import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Wrapper = styled(motion.div)`
display:flex;
flex-direction:column;
height:100%;

// @media (max-width: 500px) {
//     // flex-direction:column;
//     // width:120vw;
//     // align-items:center;
//     border:2px solid blue;

}

`

export const HeroContainer = styled.div`
display:flex;
justify-content:space-around;

flex:1;
//  @media (max-width: 500px) {
//  flex-direction:column;
// width:100vw;
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