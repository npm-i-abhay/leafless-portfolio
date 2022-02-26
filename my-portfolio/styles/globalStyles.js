import styled, { css } from "styled-components"
import { motion } from "framer-motion"
export const Container = styled.div`
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

export const Flex = styled.div`
  position: relative;
  display: flex;
  border:3px solid red;

  align-items: center;
  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${props =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `};
`

export const Cursor = styled.div`
  position: fixed;
  top: 400px;
  left: 400px;
  width: 32px;
  height: 32px;
  background: #ea281e;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  &.pointer {
    border: 4px solid ${props => props.theme.text} !important;
  }
  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid #ea281e;
    border: 4px solid #ea281e;
  }
  &.locked {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${props => props.theme.text} !important;
    top: ${props => props.theme.top} !important;
    left: ${props => props.theme.left} !important;
  }
  &.nav-open {
    background: ${props => props.theme.text};
  }
  &.nav-open,
  &.locked {
    border: 4px solid ${props => props.theme.text} !important;
  }
`


export const MainCont = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: ${props=>props.bgCol};
  color: #000;
  z-index: 100;
  overflow: hidden;
  // border:2px solid red;
`

export const NavHeader = styled.div`
  // top: 72px;
  // border:3px solid red;
  position: relative;
  h2 {
    color: ${props => props.theme.background};
  }
`

export const CloseNav = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: white;
      margin: 8px;
    }
  }
`

export const NavList = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  left:0;
  border:2px solid green;
  // background:yellow;
  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      height: 96px;
      line-height: 96px;
      overflow: hidden;
      .link {
        color: ${props => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;
        .arrow {
          height: 76px;
          margin-right: 8px;
        }
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
  left: 30%;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: #000;
  // border:2px solid green;
  .reveal {
    width: 50%;
    background: ${props=>props.bgReveal};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .video {
    background: #000;
    position: absolute;
    height: 50%;
    color:white;
    margin: 0;
    z-index: -1;
    video {
      height: 50%;
    }
  }
`

// styles for Home Page

export const ChartCont = styled.div`
// background-color:blue;
display:flex;
width:50%;
height:50%;
justify-content:center;
padding:20px 0 20px 0;
`

export const IntroHeading = styled.div`
// background-color:blue;
display:flex;
flex-direction:column;
// justify-content:space-evenly;
padding-left:30px;
padding-bottom:20px;
`
export const Header = styled.div`
// border:2px solid blue;
display:flex;
justify-content:flex-end;
width:100%;
position:fixed;
// backdrop-filter:blur(2px);
// margin-bottom:10px;
`