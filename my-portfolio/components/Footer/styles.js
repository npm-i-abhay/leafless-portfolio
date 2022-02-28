import styled from "styled-components";

export const FooterCont = styled.div`
display:flex;
// align-items:flex-start;
flex-direction:column;
// border:2px solid white;
padding:10px;
height:100%;
background-color:${props => props.bgCol};
justify-content:space-between;
`

export const SocialCont = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
border:2px solid blue;
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
border:2px solid yellow;
align-items:center;
@media (max-width: 500px) {
flex-direction:column;
}
`
export const QuickLinks = styled.div`
width:70%;
display:flex;
justify-content:space-around;
font-size:50px;
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