import styled from "styled-components";

export const ChartCont = styled.div`
// height:500px;
width:600px;
// border:2px solid red;
`

export const DataBox = styled.div`
// border:2px solid green;
height:50px;
margin-bottom:10px;
width:${props => props.boxWidth};


`
export const InsideData = styled.div`
background-color:${props => props.chartBg};
height:46px;
transition:all 1s;
width:${props => props.width};

`