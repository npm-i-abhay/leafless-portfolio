import React from 'react';


import {BsGithub} from 'react-icons/bs'
import {FiLinkedin} from 'react-icons/fi'
import {AiTwotoneMail} from 'react-icons/ai'


import { FooterCont, IconContainer, QuickCont, QuickLinks, SocialCont, SocialLinks, Text } from './styles';

export const Footer = () => {
  return (
  <FooterCont>
    <SocialCont>
      <Text>
        Get In Touch
      </Text>
      <SocialLinks>
        
        <IconContainer>
          <BsGithub color='white'/>
          <Text>Github</Text>
        </IconContainer>
        
        <IconContainer>
          <FiLinkedin color='white'/>
          <Text>LinkedIn</Text>
        </IconContainer>
        
        <IconContainer>
          <AiTwotoneMail color='white'/>
          <Text>Email</Text>
        </IconContainer>
      
      </SocialLinks>
    </SocialCont>
    
    <QuickCont>
      <Text>Quick Links</Text>
      <QuickLinks>
        <Text>About</Text>
        <Text>Work</Text>
        <Text>Home</Text>
        <Text>Resume</Text>
      </QuickLinks>
    </QuickCont>

  </FooterCont>);
};


