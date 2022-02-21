import React from 'react'
import { useTheme } from '@/utils/provider'
import { comp_theme } from '@/utils/variables'
// component imports
import { ImageContainer } from '../ImageCard'
import{MiniCarousel}  from '../MiniCarousel' // styled component imports
import { GridCont, Row, Description, ImageSlider, Text } from './styles'

export const ProjectImageGrid = ({
    imageSet1, 
    imageSet2,
    Default = "whatever",
    order
}) => {

    const{theme,setTheme} = useTheme()

    const themer = comp_theme[theme]


    const imageData1 =[
    {   title:'',
        link: '/caseStudies/buzzy/buzzPro1.png',
    },

    {   title:'',
        link: '/caseStudies/buzzy/buzzPro2.png',
    },
    
    ]
return (
    <GridCont>
        <Row 
            bgCol={themer.footer}
        
            >
            <Description
            order={order}>
                <Text txtCol={themer.buzzTxt}> {Default} </Text>
            </Description>
            {/* <ImageSlider>
                {imageSet1}
            </ImageSlider> */}

            {imageSet1}
            {/* <MiniCarousel
            dim={30} imgData={imageSet1} /> */}
            
        </Row>
        {/* <Row>
            {imageSet2}
        </Row> */}
    </GridCont>
)
}
