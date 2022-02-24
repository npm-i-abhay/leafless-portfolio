import styled from "styled-components";

export const Wrapper =styled.div`
height:100%;
display:flex;
flex-direction:column;
align-items:center;
`
export const MainHead = styled.span`
color:${props=>props.txtCol};
font-size:${props=>props.font};
text-align:left;
width:${props=>props.width};
@media (max-width: 500px) {
    font-size:18px;
    width:90%;
    text-align:center;

}
`