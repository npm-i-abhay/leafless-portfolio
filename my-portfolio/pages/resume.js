import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import styled from 'styled-components'
import { useState } from 'react'
// styled components 
const Wrapper = styled.div`
display:flex;
flex-direction:column;
// height:100%;
// width:100%;
// background-color:white;
`
const aboutMe = 'My name is Abhay Bakshi (ub-hey). I’m a full stack developer and designer specializing in streamlined interactive development. I have a keen interest in building engaging solutions that helps communities across the globe. I’m a consistent learner and I aspire to augument digital experiences '

// other imports
import { MenuReferences } from '@/props/props';
import { MenuReferences2 } from '@/props/props';


// Component imports
import { Element } from '@/components/Element'
import { Navigation } from '@/components/Navigation'
import { HeaderHam } from '@/components/HeaderHam'

export default function Resume() {

//   var references = MenuReferences

  
//   const [menu,setMenu] = useState(true)
//   var references = MenuReferences
  
//   if (menu === false) {
//     references = MenuReferences2
//   }

const [toggle,setToggle] = useState(false)
const [hammer, setHammer]= useState(false)
  return (
    <Wrapper>
       {/* <Element/> */}
      {/* <button onClick={()=>setToggle(!toggle)}> toggle </button> */}

      <HeaderHam 
          onHamClick={()=>{ 
          setHammer(!hammer)
          setToggle(!toggle)
        }}
          
        ham={hammer} 
        setHam={setHammer} />

    <Navigation toggleMenu={toggle}  setToggleMenu={setToggle}
    hamClick={()=>
    {
      setHammer(!hammer)
      setToggle(!toggle)
    }}
    ham={hammer}
    />
    </Wrapper>
  )
}
