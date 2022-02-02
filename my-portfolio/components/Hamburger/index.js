import React, {useState} from 'react';
import { useTheme } from "@/utils/provider";
import { comp_theme } from '@/utils/variables';

// styled components imports
import { 
  HamCont, 
  BarOne,
  BarTwo, 
  BarThree,
  MenuCont,
  HomeItem,
  AboutItem,
  WorkItem,
  ResumeItem

} from './styles';


export const Hamburger = ({

}) => {

  // states to toggle the display of the menu
  const[display, setDisplay] = useState('none')
  const[opacity, setOpacity] = useState(0)

  // function to handle and change the state of Hamburger
  const handleHam = ()=>
  {
    display =='none'? setDisplay('flex'): setTimeout(()=>{setDisplay('none') },500)
    opacity == '0'? setTimeout(()=>{setOpacity(1)},50): setOpacity(0)
    
  }

  const {theme, setTheme} = useTheme()
  return (
    <div>

          <HamCont           
            onClick={()=>{handleHam()}}>
            <BarOne hamBg={comp_theme[theme].ham}></BarOne>
            <BarTwo hamBg={comp_theme[theme].ham}></BarTwo>
            <BarThree hamBg={comp_theme[theme].ham}></BarThree>
          </HamCont>
          
          <MenuCont 
            menuBg={comp_theme[theme].menu}
            display={display}
            opacity={opacity}>
            <HomeItem> HOME </HomeItem>
            <AboutItem>ABOUT</AboutItem>
            <WorkItem> WORK</WorkItem>
            <ResumeItem>RESUME</ResumeItem>
          </MenuCont>


    </div>
    
  );
};


