import React from 'react';
import { Router, useRouter } from 'next/router';

import { TechStack } from './styles';

export const Logo = () => {

const router = useRouter()
  return <div onClick={()=>{router.push('/')}} style={{padding:20
  }}> 
    <TechStack src='/design/abLogo.svg' /> </div>;
};


