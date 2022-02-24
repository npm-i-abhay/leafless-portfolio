import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
`
export const Row = styled(motion.div)`
width:100%;
// border:2px solid red;
height:100%;
display:flex;
margin:20px;
justify-content:space-evenly;
@media (max-width: 500px) {
    
    flex-wrap:wrap;
    
    }
`
export const TileContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
// border:2px solid red;
`
export const Description = styled.div`
color:${props=>props.txtCol};
`
export const ProjectContainer = styled.div`
display:flex; 
flex-direction:column; 
// border:2px solid red;
justify-content:space-between;
height:90vh ;
width:100% ;
align-items:center;
@media (max-width: 500px) {

    height:100%;
    width:90% ;

    }
`