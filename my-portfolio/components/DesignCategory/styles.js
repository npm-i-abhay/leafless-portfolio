import styled from "styled-components";
import { motion } from "framer-motion";
export const InfoContainer = styled(motion.div)`
display:flex;
// justify-content:space-around;
// flex-direction:column;
align-items:center;
// flex-wrap:wrap;
height:100%;
@media (max-width: 500px) {
    flex-direction:column;
    align-items:center;
    justify-content:center;
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
justify-content:space-between;
`
export const AnimContainer  = styled(motion.div)`
height:100%;
width:50%;
// border:2px solid blue;
`
export const TechStack = styled(motion.img)`
height:70px;
width:70px;
border-radius:${props => props.radius};
`

export const ContentCont = styled.div`
// border:2px solid blue;
width:60%;
height:400px;
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
    // margin-top:50px;
    width:100%;
}
`

export const ProjectTitle = styled.p`
font-size:70px;
color:${props=>props.txtCol};
`
// export const Explore = styled.button`
// color:${props => props.txtCol};

// `