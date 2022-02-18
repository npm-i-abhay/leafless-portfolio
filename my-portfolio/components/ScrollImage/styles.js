import styled from 'styled-components'

export const Image =styled.img `
    width:50%;
    transition:all .5s;
    position:relative
    opacity:${props=>props.op};
    left:${props => props.left};
`