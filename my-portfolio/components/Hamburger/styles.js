import styled from "styled-components";

// Hamburger Icon

export const HamCont = styled.div`
display:flex;
flex-direction:column;
align-items:flex-end;
border:2px solid red;
width:10%;

`

export const BarOne = styled.div`
height:4px;
width:35px;
background-color:black;
margin:2px;
background-color:${props => props.hamBg};

`

export const BarTwo = styled.div`
height:4px;
width:25px;
background-color:black;
margin:2px;
background-color:${props => props.hamBg};

`

export const BarThree = styled.div`
height:4px;
width:20px;
background-color:black;
margin:2px;
background-color:${props => props.hamBg};

`

export const MenuCont = styled.div`
display:flex;
flex-direction:column;
height:100vh;
// width:50%;
border:2px green solid;
display:${props => props.display};
opacity:${props => props.opacity};
transition:all 1s;
background-color:${props => props.menuBg};
`


export const HomeItem = styled.div``

export const AboutItem = styled.div``

export const WorkItem = styled.div``

export const ResumeItem = styled.div``