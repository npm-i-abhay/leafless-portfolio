import styled from "styled-components";

export const ChartCont = styled.div`
// height:500px;
width:90%;
// border:2px solid red;
`

export const DataBox = styled.div`
// border:2px solid green;
height:50px;
margin-bottom:10px;
width:${props => props.boxWidth};
padding:0 20px 0 20px;

`
export const InsideData = styled.div`
background-color:${props => props.chartBg};
height:46px;
transition:all 1s;
width:${props => props.width};

`
export const SkillCont= styled.div`
display:flex;
color:${props => props.col};
align-items:center;
// background-color:blue;
width:100%;
align-it
`
export const SkillName = styled.h1`
min-width:200px;
padding:0 10px 0 10px;
`