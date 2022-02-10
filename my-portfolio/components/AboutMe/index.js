import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';


const Container = styled.div`
color:${props=>props.txtCol};
width:50%;
`

export const AboutMe = ({txt=""}) => {

    const {theme, setTheme} = useTheme()

  return <Container txtCol={comp_theme[theme].mainTxt} > {txt} </Container>;
};
