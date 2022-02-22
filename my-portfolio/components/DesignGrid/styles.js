import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
width:100%;
height:100%;
display:flex;
flex-direction:column;
`
export const Row = styled(motion.div)`
width:100%;
// border:2px solid red;
height:100%;
display:flex;
justify-content:space-evenly;
@media (max-width: 500px) {
    
    flex-wrap:wrap;
     
    }
`
export const TileContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border:2px solid red;
`
export const Description = styled.div`
color:${props=>props.txtCol};
`