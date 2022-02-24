import React from 'react'
import styled from 'styled-components'

const VideoCont = styled.video`
width:${props=>props.myWidth};
height:${props=>props.myHeight};
margin:${props=>props.margin};
border-radius:20px;
`

export const VideoContainer = ({src, width='100%', height="100%",margin}) => {
return (
        <VideoCont 
        myHeight={height} 
        myWidth={width} 
        autoPlay={'true'} 
        loop={'true'} 
        src={src} 
        margin={margin}
        />
)
}
