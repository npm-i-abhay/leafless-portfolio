// import React from 'react';
// import Chart from 'chart.js/auto'
// // import { Chart, registerables } from 'chart.js'

// // Chart.register(...registerables)
// import {Doughnut, Bar, Line, Radar} from 'react-chartjs-2'


// const newData = {
// labels: ["Red", "Blue", "Green", "Orange", "Yellow"],
// datasets:[{
//   data:[12, 19, 2, 4, 7],
//   backgroundColor:['red','blue','green', 'orange', 'yellow' ]
// }]
// }

// const options = {
//   indexAxis: 'y',
//   elements: {
//     bar: {
//       borderWidth: 2,
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'right',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Horizontal Bar Chart',
//     },
//   },
//   scales: {
//     x: {
//       grid: {
//         display: false
//       }
//     },
//     y: {
//       grid: {
//         display: false
//       }
//     }
//   }
// };
// export const MyChart = () => {

//   return <div>
//     <Bar
//     data={newData}
//     options={options}/>
    
//   </div>;
// };




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

const {theme,setTheme} = useTheme()
  return (
    <ChartCont>
        <DataBox 
          boxWidth={'100%'}
          onMouseEnter={()=>{handleMouseOver()}} > 
          <InsideData 
            chartBg={comp_theme[theme].chart}
            width={width}></InsideData> 
        </DataBox>

        <DataBox
          boxWidth={'70%'}
          onMouseEnter={()=>{handleMouseOver()}} > 
          <InsideData 
            chartBg={comp_theme[theme].chart}
            width={width}></InsideData> 
        </DataBox>
        
        <DataBox
          boxWidth={'50%'}
          onMouseEnter={()=>{handleMouseOver()}} > 
          <InsideData 
            chartBg={comp_theme[theme].chart}
            width={width}></InsideData> 
        </DataBox>
        
        
        
    </ChartCont>
  );
};


