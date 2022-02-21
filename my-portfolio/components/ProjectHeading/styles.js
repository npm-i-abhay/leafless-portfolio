import styled from "styled-components";

export const Wrapper =styled.div`
height:100%;
display:flex;
flex-direction:column;
align-items:center;
padding:20px;
// border:2px solid red;
`
export const MainHead = styled.span`
color:${props=>props.txtCol};
font-size:70px;
`
export const Blur = styled.div`
width:250px;
height:250PX;
border-radius:100px;
background-color:darkorange;
position :absolute;
filter:blur(100px);
z-index:-1;
`
export const SubHead = styled.span`
font-size:50px;
text-align:center;
color:${props=>props.txtCol};
`