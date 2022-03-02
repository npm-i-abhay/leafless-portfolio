import styled from "styled-components";
import { motion } from "framer-motion";
export const HeroContainer= styled.div`
display:flex;
flex-direction:column;
// border:5px solid #242424;
border-radius:10px;
justify-content:space-around;
align-items:center;
width:95%;
box-shadow:inset 0 0 15px #242424;

@media (max-width: 500px) {
flex-direction:column;
align-items:center;
}
`
export const StackCont = styled(motion.div)`
display:flex;
flex-wrap:wrap;
// background:red;
width:90%;
justify-content:space-between;
`

export const TechStack = styled(motion.img)`
height:100px;
width:100px;
border-radius:${props => props.radius};
cursor:${props=>props.cursor};
`
export const Title = styled.h1`
font-size:40px;
color:${props=>props.txtCol};
@media (max-width: 500px) {
    font-size:40px;
    }
`

export const Heading = styled.div`
font-size:30px;
color:${props=>props.headCol}

`
export const Text = styled.div`
font-size:20px;
color:${props=>props.contentCol}
`
export const ColumnTeam = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
// border:2px solid red;
height:100%;
`

export const ColumnSourceCode = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`
export const InlineRow = styled.div`
display:flex;
width:100%;
height:100%;
flex-direction:column;
justify-content:flex-start;
align-items:center;
@media (max-width: 500px) {
    // flex-direction:column;
    // align-items:center;

    }
`
export const Row= styled.div`
display:flex;
width:100%;
height:100%;
// border:2px solid yellow;
justify-content:space-around;
align-items:center;
padding:10px;
@media (max-width: 500px) {
    flex-direction:column;
    }
`