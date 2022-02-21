import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background:white;
`
export const Title = styled.h1`
font-size: 10rem;
// background:;
  text-align: center;
  width: 50%;
  margin: 0 auto;
  color: #fff;
  span {
    display: block;
  }
  @media (max-width: 1440px) {
    font-size: 6rem;
  }
`

export const HeroContainer= styled.div`
display:flex;
// border:2px solid green;
justify-content:space-around;
@media (max-width: 500px) {
  flex-direction:column;
  align-items:center;
}
`
export const AnimCont = styled.div`
width:20%;
position:absolute;
top:${props=>props.top}px;
left:${props=>props.left}px;
transition:all 3s;
`
