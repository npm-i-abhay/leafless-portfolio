import styled from "styled-components";

export const FooterCont = styled.div`
display:flex;
// align-items:flex-start;
flex-direction:column;
// border:2px solid white;
padding:10px;
height:300px;
background-color:${props => props.bgCol};
justify-content:space-around;
`

export const SocialCont = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
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
`
export const QuickLinks = styled.div`
width:70%;
display:flex;
justify-content:space-around;
`

export const Text= styled.span`
color:white;`

export const IconContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
cursor:pointer;
`