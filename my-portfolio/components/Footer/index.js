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
  Text,
  Heading,
  TechStack
} from './styles';


import { ProjectHeading } from '../ProjectHeading';

export const Footer = () => {
  const {theme} = useTheme()
  const router = useRouter()
  return (
  <FooterCont bgCol={comp_theme[theme].footer} >
    <SocialCont>
      <Heading> Get in Touch </Heading>
      <SocialLinks>
        
        <IconContainer onClick={()=>{ window.open("https://github.com/npm-i-abhay", '_blank')}}>
          <TechStack  src =' /tech/github.png' />
          <Text>Github</Text>
        </IconContainer>
        
        <IconContainer onClick={()=>{ window.open("https://www.linkedin.com/in/abhay-bakshi/", '_blank')}}>
        <TechStack  src =' /tech/linkedIn.png' />
          <Text  >LinkedIn</Text>
        </IconContainer>
        
        <IconContainer onClick={()=>{ window.open("mailto:abhaybakshi8@gmail.com", '_blank')}}>
        <TechStack  src =' /tech/mail.png' />
          <Text>Email</Text>
        </IconContainer>
      
      </SocialLinks>
    </SocialCont>
    
    <QuickCont>
    <Heading> Quick Links </Heading>
      <QuickLinks>
        <Text onClick={()=>{router.push('/about')}} >About</Text>
        <Text onClick={()=>{router.push('/work')}} >Showcase</Text>
        <Text onClick={()=>{router.push('/')}} >Home</Text>
        <Text onClick={()=>{ window.open("/AbhayBakshi.pdf", '_blank')}} >Resume</Text>
      </QuickLinks>
    </QuickCont>

  </FooterCont>);
};


