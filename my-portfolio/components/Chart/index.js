
import React, {useState} from 'react';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';

// styled components imports
import { ChartCont, DataBox, InsideData } from "./styles";




export const MyChart = () => {
  const [width, setWidth] = useState(0)

  const handleMouseOver = ()=>
  {
    width == 0 ? setWidth('100%') : setWidth(0) 
  }

const data = [
  { title:'Javascript', width:"100%"},
  {title:'HTML', width:"60%"}
]

const {theme,setTheme} = useTheme()
  return (
    <ChartCont>
      {data.map((o,i)=>(
                        <DataBox 
                          boxWidth={o.width}
                          onMouseEnter={()=>{handleMouseOver()}}> 
                          <InsideData
                                chartBg={comp_theme[theme].chart}
                                width={width}> </InsideData> 
                          
                        </DataBox>))
                        
                        }      
        
    </ChartCont>
  );
};


