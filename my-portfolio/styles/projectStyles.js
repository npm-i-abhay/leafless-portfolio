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