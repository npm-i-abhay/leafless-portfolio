import styled from "styled-components";
import { font,font_two } from "@/utils/variables";
import { motion } from "framer-motion";


export const Heading = styled(motion.span)`
// font-family: 'Roboto Mono', monospace;
font-family: ${font.name};
font-weight:400;
color:${props => props.headCol};
font-size:96px;
text-justify:center;
// background:red;
display:inline;
@media (max-width: 500px) {
    font-size:50px;   
}
`
export const SubHeading = styled(motion.div)`
// @import url('https://fonts.googleapis.com/css2?family=Poppins&family=Roboto+Mono&display=swap');
font-family: 'Roboto Mono', monospace;
font-size:96px;
font-weight:400;
color:${props => props.subHeadCol};
display:inline;
margin-left:10px;
@media (max-width: 500px) {
    font-size:50px;
   
}
// background:blue;
`


export const HeadingCont = styled.div`
padding:10px;
@media (max-width: 500px) {
    display:flex;
    flex-direction:column;

}
// border:2px solid red;
// width:35%;
`
