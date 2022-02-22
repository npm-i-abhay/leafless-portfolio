import React,{useState} from 'react';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';
// styled components imports 
import { Heading, SubHeading, HeadingCont } from './styles';
const HeadingTxt1=['H','i']
const HeadingTxt2=[`I`,`'`,'m']
const HeadingTxt3=['A','b','h','a','y']
const HeadingTxt4=['F','r','o','n','t','-','E','n','d',]
const HeadingTxt5=['D','e','v','e','l','o','p','e','r']
export const WelcomeHeading = (
  {
    lineOne=HeadingTxt1,
    lineTwo=HeadingTxt2,
    lineThree=HeadingTxt3,
    lineFour = HeadingTxt4,
    lineFive=HeadingTxt5,
  }
) => {
const {theme,setTheme} = useTheme()
const [myClass, setMyClass] = useState()




  return( 
  <HeadingCont >
      <div style={{display:'flex'}}> 

        {lineOne.map((o,i)=>(
          <Heading
            className={'heading'}
            headCol={comp_theme[theme].mainTxt}>
            {o}
          </Heading>
        ))}
      </div>
      <div style={{display:'flex'}}> 

        {lineTwo.map((o,i)=>(
          <Heading
            className={'heading'}
            headCol={comp_theme[theme].mainTxt}>
            {o}
          </Heading>
        ))}

        {lineThree.map((o,i)=>(
          <SubHeading 
            subHeadCol={comp_theme[theme].menu}
            className='heading'
            headCol={comp_theme[theme].mainTxt}>
            {o}
          </SubHeading>
        ))}
      </div>
      
      <div style={{display:'flex'}}> 
        
      {lineFour.map((o,i)=>(
          <Heading
            className={'heading'}
            headCol={comp_theme[theme].mainTxt}>
            {o}
          </Heading>
        ))}
        {lineFive.map((o,i)=>(
          <SubHeading 
            subHeadCol={comp_theme[theme].menu}
            className='heading'
            headCol={comp_theme[theme].mainTxt}>
            {o}
          </SubHeading>
        ))}
      </div>
    
  </HeadingCont>)
};


// <div>
//       <Heading 
//         whileHover={{color:'red' }}
//         headCol={comp_theme[theme].mainTxt} > 
//         {lineOne} 
//       </Heading>
//     </div>
    
//     <div>
//       <Heading headCol={comp_theme[theme].mainTxt}> 
//         {lineTwo}
//       </Heading>
      
//       <SubHeading subHeadCol={comp_theme[theme].accentTxt}> 
//         {accentOne}
//       </SubHeading>
//     </div>
    
//     <div>
//       <Heading headCol={comp_theme[theme].mainTxt}> 
//         {lineThree}
//       </Heading>
//       <SubHeading subHeadCol={comp_theme[theme].accentTxt}> 
//         {accentTwo}
//       </SubHeading>
//     </div>