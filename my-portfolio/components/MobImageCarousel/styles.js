import styled from "styled-components";
import { motion } from "framer-motion";

export const Cont = styled.div`
display:inline-flex;
flex-direction:column;
// border:2px solid yellow;
width:100vw;
align-items:center;
padding:10px;
`

export const CardCont = styled.div`
display:flex;
// border:2px solid green;
max-width:${props => props.dim}vw;
max-width:100vw;
height:50vh;
overflow:hidden;
padding:5px;
`

export const CardWrapper = styled.div`
display:flex;
left:${props => props.left}vw;
transition: all .5s;
position:relative;
align-items:center;
justify-content:center;

`

// export const Card = styled(motion.img)`
// // width:${props => props.dim}vw;
// // height:50vh;
// object-fit:cover;
// position:relative;
// left:${props => props.left}vw;
// z-index:${props => props.z};
// opacity:${props => props.op};
// transition:all .5s;
// padding:5px;
// `
export const ProjectCard = styled(motion.div)`
border:.5px solid ${props=>props.borderCol};
background:${props=>props.bgCol};
height:80vh;
// padding:5px;
border-radius:20px;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
margin:10px;
`

export const Card = styled(motion.img)`
// width:${props => props.wid}vw;
// height:50vh;
object-fit:cover;
position:relative;
left:${props => props.left}vw;
z-index:${props => props.z};
border-radius:20px;
transition:all .5s;
// padding:5px;
`

export const Controls = styled.div`
display:flex;
// border:2px solid red;
justify-content:space-between;
width:80%;
`
