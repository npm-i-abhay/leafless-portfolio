import styled from 'styled-components'
import {motion} from 'framer-motion'

export const SectionWrapper=styled(motion.div)`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
// border:2px solid blue;
width:100%;
`
export const Line =styled(motion.div)`
// border:2px solid blue;
width:2px;
background: rgb(2,0,36);
background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(131,55,227,1) 30%, rgba(139,58,243,1) 100%);
height:150px;
`

export const Circle = styled(motion.div)`
height:60px;
width:60px;
// border:2px solid red;
border-radius:50px;
background: rgb(111,41,198);
background: linear-gradient(93deg, rgba(111,41,198,1) 40%, rgba(115,17,115,1) 100%);
`
export const ProjectTitle = styled(motion.p)`
font-size:70px;
background: -webkit-linear-gradient(360deg, rgba(111,41,198,1) 40%, rgba(115,17,115,1) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
width:100%;
// border:2px solid red;
display:flex;
justify-content:center;
@media (max-width: 500px) {
    font-size:28px;
    background: -webkit-linear-gradient(360deg, rgba(111,41,198,1) 40%, rgba(115,17,115,1) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
width:100%;
    text-align:center;
    border:2px solid red;

}
`