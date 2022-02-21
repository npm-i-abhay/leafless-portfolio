import React from 'react'

// styled components import 
import { ImageCont, Image } from './styles'

export const ProjectHero = (
    {
        src='/test/ss3.jpeg',
        width="100%"
    }) => {
  return (
    <ImageCont>
        <Image 
          src={src}
          width={width}
          />
    </ImageCont>
  )
}
