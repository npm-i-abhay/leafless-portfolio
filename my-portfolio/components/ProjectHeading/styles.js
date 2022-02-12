import styled from "styled-components";

export const Wrapper =styled.div`
height:100%;
display:flex;
flex-direction:column;
align-items:center;
`
export const MainHead = styled.span`
color:${props=>props.txtCol};
font-size:70px;
`

export const SubHead = styled.span`
font-size:50px;
text-align:center;
color:${props=>props.txtCol};
`