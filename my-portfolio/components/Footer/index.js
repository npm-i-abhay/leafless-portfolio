import React from 'react';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';
import { useRouter } from 'next/router';
import {BsGithub} from 'react-icons/bs'
import {FiLinkedin} from 'react-icons/fi'
import {AiTwotoneMail} from 'react-icons/ai'


import { 
  FooterCont, 
  IconContainer, 
  QuickCont, 
  QuickLinks, 
  SocialCont, 
  SocialLinks, 
  Text } from './styles';


import { ProjectHeading } from '../ProjectHeading';

export const Footer = () => {
  const {theme} = useTheme()
  const router = useRouter()
  return (
  <FooterCont bgCol={comp_theme[theme].footer} >
    <SocialCont>
      <ProjectHeading mainHead='Get in Touch' />
      <SocialLinks>
        
        <IconContainer onClick={()=>{window.location = "https://github.com/npm-i-abhay"}}>
          <BsGithub color='white'/>
          <Text>Github</Text>
        </IconContainer>
        
        <IconContainer onClick={()=>{window.location = "https://www.linkedin.com/in/abhay-bakshi/"}}>
          <FiLinkedin color='white'/>
          <Text  >LinkedIn</Text>
        </IconContainer>
        
        <IconContainer onClick={()=>{window.location = "mailto:abhaybakshi8@gmail.com"}}>
          <AiTwotoneMail color='white'/>
          <Text>Email</Text>
        </IconContainer>
      
      </SocialLinks>
    </SocialCont>
    
    <QuickCont>
      <ProjectHeading mainHead='Quick Links' />
      <QuickLinks>
        <Text onClick={()=>{router.push('/about')}} >About</Text>
        <Text onClick={()=>{router.push('/work')}} >Showcase</Text>
        <Text onClick={()=>{router.push('/')}} >Home</Text>
        <Text onClick={()=>{router.push('')}} >Resume</Text>
      </QuickLinks>
    </QuickCont>

  </FooterCont>);
};


