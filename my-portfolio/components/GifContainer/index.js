import React from 'react'

import {GifImage, GifImage2, Wrapper} from './styles'

// component imports 
import { ProjectHero } from '../ProjectHero'

const  defaultData  =["https://placekitten.com/200/200","https://placekitten.com/200/200"]
export const GifContainer = ({gif1,gif2}) => {
  return (
    <Wrapper>
        
            <GifImage src={gif1} />
            <GifImage2 src={gif2} />

      
    </Wrapper>
  )
}
