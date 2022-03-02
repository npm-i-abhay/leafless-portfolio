import styled from "styled-components";
import { motion } from "framer-motion";
export const InfoContainer = styled(motion.div)`
display:flex;
justify-content:space-around;
align-items:center;
flex-wrap:wrap;
// border:2px solid green;
height:70vh;
@media (max-width: 500px) {
    flex-direction:column;
    align-items:center;
    height:100%;
    // justify-content:center;
    // background:green;
}
`

export const Description = styled.div`
color:${props => props.txtCol};

`

export const StackCont = styled(motion.div)`
display:flex;
flex-wrap:wrap;
// background:red;
width:100%;
margin:10px;
justify-content:space-between;
`

export const TechStack = styled(motion.img)`
height:70px;
width:70px;
border-radius:${props => props.radius};
`

export const ContentCont = styled.div`
// border:2px solid blue;
width:60%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
order:-1;

@media (max-width: 500px) {
    order:0;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    // background:red;
    height:500px;
    margin-top:50px;
}
`

export const ProjectTitle = styled.p`
font-size:70px;
color:${props=>props.txtCol};
`
// export const Explore = styled.button`
// color:${props => props.txtCol};

// `

export const Row= styled.div`
display:flex;
width:100%;
height:100%;
// border:2px solid yellow;
justify-content:${props=>props.justify};
align-items:center;
padding:10px;
@media (max-width: 500px) {
    flex-direction:column;
    }
`