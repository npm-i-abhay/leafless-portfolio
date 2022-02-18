import styled from "styled-components";

export const Wrapper =styled.div`
height:100%;
display:flex;
flex-direction:column;
align-items:center;
`
export const MainHead = styled.span`
color:${props=>props.txtCol};
font-size:28px;
text-align:center;
width:60%;
@media (max-width: 500px) {
    font-size:18px;
    width:90%;
    text-align:center;

}
`