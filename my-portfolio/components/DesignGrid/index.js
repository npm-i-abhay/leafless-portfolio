import React from 'react'
import { useTheme } from '@/utils/provider'
import { comp_theme } from '@/utils/variables'
// styled component imports
import { 
    Wrapper, 
    Row, 
    TileContainer, 
    Description,
    ProjectContainer
} from './styles'

import { ImageContainer, } from '../ImageCard'
import { ProjectHero } from '../ProjectHero'
import { AboutMe } from '../AboutMe'

const designData1=[
    {
        link:"/design/moog.png", 
        info:'Info about the photos'
    },
    {
        link:'/design/photoshop1.png', 
        info:'Info about the photos' 
    }]
    

const designData2=[

{ link:'/design/logos1.png', info:"Info about the project" },
{ link:'/design/proms1.png', info:"Info about the project" },
{ link:'/design/proms2.png', info:"Info about the project" }

]

const designData3=[
    {link:'/design/illustration.png', 
    info:'Info about the photos' },
    
    {link:'/design/funkLogo.png', 
    info:'Info about the photos' }
]


export const DesignGrid = () => {
return (
    <Wrapper>
        <Row>
            {designData1.map((o,i)=>(<ProjectContainer key={i} >
                <ImageContainer width='80%' maxHeight='95%' imgUrl={o.link}/>
                <AboutMe txt={o.info} />
            </ProjectContainer>))}
        </Row>

        <Row>
            <ProjectContainer>
                <ImageContainer width='100%' maxHeight='90%' imgUrl='/design/landscape.png'/>
                <AboutMe txt='info about the photo' />
            </ProjectContainer>

        </Row>

        <Row>
            {designData2.map((o,i)=>(<ProjectContainer key={i} >
                <ImageContainer width='95%' maxHeight='90%' imgUrl={o.link}/>
                <AboutMe txt={o.info} />
            </ProjectContainer>))}



        </Row>
        <Row>
        {designData3.map((o,i)=>(
            <ProjectContainer key={i} >
                <ImageContainer width='95%' maxHeight='90%' imgUrl={o.link}/>
                <AboutMe txt={o.info} />
            </ProjectContainer>))}
        </Row>
            

    </Wrapper>
  )
}
