import React from 'react'
import { useTheme } from '@/utils/provider'
import { comp_theme } from '@/utils/variables'
// styled components import 
import { Wrapper,MainHead } from './styles'

export const ProjectDescrip = ({mainHead,txtCol, width='60%', font='28px'}) => {
    const {theme,setTheme}= useTheme()
    const themer = comp_theme[theme]

return (
    <Wrapper>
        <MainHead 
            width={width}
            font={font}
            txtCol={txtCol} > 
            {mainHead} 
        </MainHead>
    </Wrapper>
  )
}
