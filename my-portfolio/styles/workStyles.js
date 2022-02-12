import styled from "styled-components";

export const CatCont = styled.div`
display:flex;
flex-direction:column;
height:100%;
justify-content:space-around;
padding-right:15px;
`

export const CatButts = styled.div`
height:150px;
padding-bottom:10px;
width:30px;
color:${props=>props.txtCol};
background:${props=>props.bg};
border:.5px solid ${props=>props.txtCol};
border-radius:5px;
transition:all .5s;
cursor: pointer;
`
export const CatName = styled.h3`
transform:rotate(90deg)
// font-weight:300;
`