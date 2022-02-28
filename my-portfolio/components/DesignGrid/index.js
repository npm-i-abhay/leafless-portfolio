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
        info:'Hyper-real illustration of a MOOG synthesizer made in Adobe Illustrator '
    },
    {
        link:'/design/photoshop1.png', 
        info:'Concept art poster made in Adobe Photoshop' 
    }]
    

const designData2=[

{ link:'/design/logos1.png', info:"Logo design for a cognitive computing company made in Adobe Illustrator" },
{ link:'/design/proms1.png', info:"Poster for BBC proms built using principles of typography in InDesign" },
{ link:'/design/proms2.png', info:"Poster for BBC proms built using principles of typography in InDesign" }

]

const designData3=[
    {link:'/design/illustration.png', 
    info:'Concept illustration made in Adobe Illustrator ' },
    
    {link:'/design/funkLogo.png', 
    info:'First ever Logo Design for Music Magazine, Funkin Hell' }
]


export const DesignGrid = () => {
return (
    <Wrapper>
        <Row>
            {designData1.map((o,i)=>(<ProjectContainer key={i} >
                <ImageContainer width='80%' maxHeight='95%' imgUrl={o.link}/>
                <AboutMe width='100%' txt={o.info} />
            </ProjectContainer>))}
        </Row>

        <Row>
            <ProjectContainer>
                <ImageContainer width='100%' maxHeight='90%' imgUrl='/design/landscape.png'/>
                <AboutMe width='100%' txt='Digital painting made from scratch in Photoshop' />
            </ProjectContainer>

        </Row>

        <Row>
            {designData2.map((o,i)=>(<ProjectContainer key={i} >
                <ImageContainer width='95%' maxHeight='90%' imgUrl={o.link}/>
                <AboutMe width='100%' txt={o.info} />
            </ProjectContainer>))}



        </Row>
        <Row>
        {designData3.map((o,i)=>(
            <ProjectContainer key={i} >
                <ImageContainer width='95%' maxHeight='90%' imgUrl={o.link}/>
                <AboutMe width='100%' txt={o.info} />
            </ProjectContainer>))}
        </Row>
            

    </Wrapper>
  )
}
