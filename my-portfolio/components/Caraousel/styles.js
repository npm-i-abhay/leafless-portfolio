import styled from "styled-components";


export const Cont = styled.div`
display:inline-flex;
flex-direction:column;
`

export const CardCont = styled.div`
display:flex;
// border:2px solid green;
// max-width:${props => props.dim}vw;
max-width:100vw;
height:60vh;
overflow:hidden;
// padding:5px;
`

export const CardWrapper = styled.div`
display:flex;
left:${props => props.left}vw;
transition: all .5s;
position:relative;
align-items:center;
justify-content:center;
`

export const Card = styled.img`
width:${props => props.dim}vw;
height:${props => props.dim}vw;
object-fit:cover;
position:relative;
left:${props => props.left}vw;
z-index:${props => props.z};
opacity:${props => props.op};

margin-left:${props => props.margin}em;
margin-right:${props => props.margin}em;
transition:all .5s;
`

export const Controls = styled.div`
display:flex;
// border:2px solid red;
justify-content:space-between;
width:80%;
margin:50px;
`
export const ControlsCont= styled.div`
display:flex;
justify-content:center;
// background-color:blue;
// width:100%;
`
export const CtrlButton = styled.button``