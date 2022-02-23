import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';


const Container = styled.div`
color:${props=>props.txtCol};
width:40%;
font-size:20px;
margin:10px;
// border:2px solid red;
@media (max-width: 600px) {
  width:90%;
  text-align:center;
  // border:2px solid red; 

}
`

export const AboutMe = ({txt=""}) => {

    const {theme, setTheme} = useTheme()

  return <Container txtCol={comp_theme[theme].mainTxt} > {txt} </Container>;
};
