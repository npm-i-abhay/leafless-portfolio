import React from 'react'
import { useTheme } from '@/utils/provider'
import { comp_theme } from '@/utils/variables'
// styled component imports
import { Wrapper,MainHead,SubHead, Blur } from './styles'

export const NextProject = ({
  mainHead, 
  subHead,
  headCol,
  subCol,
  handleClick=()=>{}

}) => {
const {theme,setTheme}= useTheme()

const themer = comp_theme[theme]

  return (
    <Wrapper onClick={handleClick} >

      <MainHead txtCol={headCol} > 
        {mainHead} 
      </MainHead>
      
      
    </Wrapper>
  )
}
