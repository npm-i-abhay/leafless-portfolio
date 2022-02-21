
import React, {useState} from 'react';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';

// styled components imports
import { 
  ChartCont, 
  DataBox, 
  InsideData,
  SkillCont,
  SkillName
} from "./styles";

// data import for skills chart
import {data} from '@/props/props'


export const MyChart = () => {
  const [width, setWidth] = useState(0)

  const handleMouseOver = ()=>
  {
    width == 0 ? setWidth('100%') : null
  }



const {theme,setTheme} = useTheme()
  return (
    <ChartCont>
      {data.map((o,i)=>(<SkillCont key={i} col={comp_theme[theme].mainTxt} >
                        <SkillName> {o.title} </SkillName>
                        <DataBox
                          key={i}
                          boxWidth={o.width}
                          onMouseEnter={()=>{handleMouseOver()}}> 
                          <InsideData
                                chartBg={comp_theme[theme].chart}
                                width={width}> </InsideData> 
                          
                        </DataBox>
                        </SkillCont>))
                        
                        }      
        
    </ChartCont>
  );
};


