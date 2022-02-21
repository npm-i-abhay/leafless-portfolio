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

export const BaseContainer = styled.div`
  flex-grow: 1;
  // margin: 0 auto;
  // border:3px solid red;
  left:0;
  padding: 0 12px;
  position: relative;
  width: 100%;
  height: 100%;
  // @media (min-width: 1024px) {
  //   max-width: 100vw;
  // }
  // @media (min-width: 1216px) {
  //   max-width: 1100vw;
  // }
  // @media (min-width: 1408px) {
  //   max-width: 1244px;
  // }
  ${props =>
    props.fluid &&
    css`
    padding: 0;
    margin: 0;
    background: red;
    max-width: 100% !important;
    `}
`
export const Header = styled.div`
display:flex;
justify-content:flex-end;
// border:2px solid red;
width:87vw;
`

export const NavHeader = styled.div`
  // top: 72px;
  // border:3px solid red;

  position: relative;
  h2 {
    color: ${props => props.theme.background};
}
`

export const ProjectsContainer = styled.div`
height: 90vh;
width: 100%;
display: flex;
align-items: center;
left:0;
// border:2px solid green;
  // background:yellow;
ul 
{
    padding: 0;
    li 
    {
            list-style: none;
            font-size: 3rem;
            text-transform: uppercase;
            font-weight: 900;
            height: 96px;
            line-height: 96px;
            overflow: hidden;
        .link 
        {
            color: ${props => props.theme.background};
            position: relative;
            display: flex;
            align-items: center;
                .arrow 
                {
                    height: 76px;
                    margin-right: 8px;
                }
        }
    }
}

`

export const RevealContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 30%;
  z-index: -1;
  height: 100%;
  width: 70%;
  background: #000;
  // border:2px solid green;
  display:flex;
justify-content:center;
  .reveal {
    width: 20%;
    background: ${props=>props.bgReveal};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .video {
    // background: red;
    position: absolute;
    height: 100%;
    width:100%;
    color:white;
    margin: 0;
    z-index: -1;
    display:flex;
    justify-content:center;
    align-items:center;
    video {
    height: 50%;
    }
  }
`
