import styled from "styled-components";
import { motion } from "framer-motion";
export const FooterCont = styled.div`
display:flex;
// align-items:flex-start;
flex-direction:column;
// border:2px solid white;
padding:10px;
height:100%;
background-color:${props => props.bgCol};
justify-content:space-between;
border-radius:20px 20px 0px 0px;
`

export const SocialCont = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
@media (max-width: 500px) {
    flex-direction:column;
    font-size:20px;
    }
`
export const SocialLinks = styled.div`
width:70%;
display:flex;
justify-content:space-around;
// border:2px solid red;
`
export const QuickCont = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
@media (max-width: 500px) {
flex-direction:column;
}
`
export const QuickLinks = styled.div`
width:70%;
display:flex;
justify-content:space-around;
font-size:20px;
@media (max-width: 500px) {
    font-size:20px;
    width:90%;
    text-align:center;

}
`

export const Text= styled.span`
color:white;`



export const IconContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
cursor:pointer;
`
export const Heading = styled.h1`
color:#8B3AF3;
font-size:40px;
`
export const TechStack = styled(motion.img)`
height:70px;
width:70px;
border-radius:${props => props.radius};
`