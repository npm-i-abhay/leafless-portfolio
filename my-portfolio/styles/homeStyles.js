import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

// export const AnimationCont = styled.div`
// height:100px;
// width:100px;
// border:2px solid red;
// animation-name: ${Anim};
// animation-duration: 8s;
// animation-iteration-count: infinite;
// `
// const Anim  = keyframes` 

//     0% { height: 100px; width: 100px; }
//     30% { height: 400px; width: 400px; opacity: 1 }
//     40% { height: 405px; width: 405px; opacity: 0.3; }
//     100% { height: 100px; width: 100px; opacity: 0.6; }
// `

const rotate = keyframes`


    0% { top:-200px;}
    30% { top:0px;}
    40% { top:-100px;}
    60% { top:0px; }
    70% { top:-50px; }
    85% { top:0px; }
    95% { top:-20px; }
    100% { top:0px; }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const AnimationCont = styled(motion.div)`
  display: inline-block;
  position:relative;
//   animation: ${rotate} 2s linear 2;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
  height:150px;
  width:150px;
  // border:2px solid red;
`;