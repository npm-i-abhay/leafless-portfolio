import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';


const Container = styled.div`
color:${props=>props.txtCol};
width:${props=>props.width};
font-size:20px;
// margin:0 20px 0 20px;
text-align:center;
@media (max-width: 600px) {
  width:90%;
  text-align:center;
  // border:2px solid red; 

}
`

export const AboutMe = ({txt="", width='40%'}) => {

    const {theme, setTheme} = useTheme()

  return <Container width={width} txtCol={comp_theme[theme].mainTxt} > {txt} </Container>;
};
