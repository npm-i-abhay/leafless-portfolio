import styled from "styled-components";

export const GridCont = styled.div`
display:flex;
flex-direction:column;
padding:10px;
height:50%;
align-items:center;
` 

export const Row = styled.div` 
display:flex;
justify-content:space-between;
padding:20px;
// border:2px solid #94BDD450;
border-radius:5px;
width:90%;
height:100%;
background:${props=>props.bgCol};
box-shadow:inset 0 0 30px 10px #00000070;
`

export const Description = styled.div`
// border:2px solid blue;
border-right: 2px dashed #94BDD450;;
display:flex;
width:50%;
order:${props=>props.order};
`

export const ImageSlider = styled.div`
border:2px solid green;
display:flex;
justify-content:space-around;
height:100%;
`

export const Text = styled.span`
color:${props=>props.txtCol};
`