import React from 'react'
import { useTheme } from '@/utils/provider'
import { comp_theme } from '@/utils/variables'
// styled component imports
import { Wrapper, Row, TileContainer, Description } from './styles'

import { ImageContainer, } from '../ImageCard'
import { ProjectHero } from '../ProjectHero'

const designData1=["/design/moog.png",'/design/landscape.png']
const designData2=[]
const designData3=[
'/design/logos1.png',
'/design/proms1.png',
'/design/proms2.png']

export const DesignGrid = () => {
  return (
    <Wrapper>
        <Row>
            <ProjectHero width='100%'src='/design/moog.png'/>
            <ProjectHero src='/design/photoshop1.png'/>
        </Row>
        <Row>
            <ProjectHero src='/design/landscape.png'/>
        </Row>
        <Row>
            <ProjectHero src='/design/logos1.png'/>
            <ProjectHero src='/design/proms1.png'/>
            <ProjectHero src='/design/proms2.png'/>

        </Row>
        <Row>
            <ProjectHero src='/design/illustration.png'/>
            <ProjectHero src='/design/funkLogo.png'/>
        </Row>
            

    </Wrapper>
  )
}
