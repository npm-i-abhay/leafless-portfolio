import styled from "styled-components";
import { motion } from "framer-motion";

export const CtaButton = styled(motion.div)`
border:1.5px solid #8B3AF3;
color:${props => props.btnTxt};
width:${props=>props.width};
height:45px;
font-size:20px;
display:flex;
justify-content:center;
align-items:center;
border-radius:4px;
display:${props=>props.display};
`
export const ButtonCont = styled(motion.div)`
padding:15px;
cursor:pointer;
`