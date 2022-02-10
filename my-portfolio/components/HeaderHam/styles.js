import styled from "styled-components";

export const HamContainer = styled.div `
// position:absolute;

right:${props => props.hamRight};
z-index:1;
transition: all 1s;
margin:10px;
cursor:pointer;`
export const HamLine1 = styled.div`
height:.25em;
width:35px;
margin:.5em;
background-color:${props => props.col};
transition:all 1s;
transform:${props=> props.LineTrans1};
`
export const HamLine2 = styled.div`
height:.25em;
width:35px;
margin:.5em;
background-color:${props => props.col};
transition:all 1s;
opacity:${props => props.LineTransOp2};
`
export const HamLine3 = styled.div`
height:.25em;
width:35px;
margin:.5em;
background-color:${props => props.col};
transition:all 1s;
transform:${props=> props.LineTrans3};
`