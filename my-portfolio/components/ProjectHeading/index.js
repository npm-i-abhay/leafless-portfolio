import React from 'react'
import { useTheme } from '@/utils/provider'
import { comp_theme } from '@/utils/variables'
// styled component imports
import { Wrapper,MainHead,SubHead } from './styles'

export const ProjectHeading = ({
  mainHead, 
  subHead,
  headCol,
  subCol

}) => {
const {theme,setTheme}= useTheme()

const themer = comp_theme[theme]

  return (
    <Wrapper>
      <MainHead txtCol={headCol} > 
        {mainHead} 
      </MainHead>
      
      <SubHead txtCol={subCol}>  
        {subHead}
      </SubHead>
    </Wrapper>
  )
}
