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
@media (max-width: 500px) {
    width:100%;
font-size:50px;
text-align:center;
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
width:100%;
color:${props=>props.txtCol};
padding:5px;
// background-color:red;
@media (max-width: 500px) {
    // // height:60vh;
    // width:80vw;
font-size:40px;
}
`