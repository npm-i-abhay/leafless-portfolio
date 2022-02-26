

import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  display: block;
  background: ${props=>props.listBG};
  color: #000;
  z-index: 100;
  overflow: hidden;
  // border:10px solid yellow; 
  @media (max-width: 500px) {
    width:100%

}
`

export const NavHeader = styled.div`
  width:87vw;
  max-width:87vw;
  display:flex;
  justify-content:flex-end;
  position: relative;
  h2 {
    color: ${props => props.theme.background};
  }
`

export const CloseNav = styled.div`
  
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
      
    
  
`

export const NavList = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-items:center;
  // border:5px solid blue;
  
  ul {
    padding: 0;
    // margin-top:-2em;
    // border:2px solid red;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    height:90%;
    li {
      cursor:pointer;
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      // border:2px solid yellow;
      height: 96px;
      width:900px;
      line-height: 96px;
      overflow: hidden;
      .link {
        color: ${props=>props.linkCol};
        position: relative;
        display: flex;
        align-items: center;
        .arrow {
          height: 76px;
          margin-right: 8px;
        }
      }
      svg {
        width: 100px;
        path {
          fill: ${props => props.theme.background};
        }
      }
    }
  }
`
export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 56px 0px;
  p {
    color: ${props => props.theme.background};
  }
  svg path {
    fill: ${props => props.theme.background};
  }
`

export const NavVideos = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 28%;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: #000;
  .reveal {
    width: 100%;
    background: ${props=>props.revealBG};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .video {
    background: #000;
    position: absolute;
    height: 100%;
    color:white;
    margin: 0;
    z-index: -1;
    video {
      height: 100%;
    }
  }
`

export const HamIconCont = styled.div`
// border:5px solid green;
// display:flex;
// justify-content:flex-end;
// width:80vw;
`