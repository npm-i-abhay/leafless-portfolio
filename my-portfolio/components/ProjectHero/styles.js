import styled from "styled-components";

export const ImageCont = styled.div`
width:45%;
max-height:45%;
// border:2px solid red;
display:flex;
// justify-content:flex-start;
align-items:center;
padding:20px;
@media (max-width: 500px) {
    height:100%;
    width:100%;

}
`

export const Image = styled.img`
object-fit:cover;
// height:100%;
width:${props=>props.width};
border-radius:10px;
@media (max-width: 500px) {
    // height:60vh;
    width:100%;

}
`