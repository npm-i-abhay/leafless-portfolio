import styled from "styled-components";
import { motion } from "framer-motion";
export const ImageCont = styled(motion.div)`
width:${props=>props.width};
max-height:${props=>props.maxHeight};
// border:2px solid red;
display:flex;
justify-content:center;
`

export const Image = styled(motion.img)`
object-fit:cover;
height:100%;
width:100%;
border-radius:5px;
@media (max-width: 500px) {
    // height:60vh;
    width:80vw;

}
`