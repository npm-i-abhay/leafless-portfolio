
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import { MyButton } from '@/components/Button';
import { comp_theme } from '@/utils/variables';
import { useTheme } from '@/utils/provider';


const Cont = styled.div`
display:inline-flex;
flex-direction:column;
// border:20px solid yellow;
align-items:center;
justify-content:center;
`

const CardCont = styled.div`
width:25vw;
height:100vh;
display:flex;
align-items:center;
// border:2px solid green;
overflow:hidden;
// display:flex;
// justify-content:center;
// border:5px solid yellow;
// padding:5px;
transition:all 1s;
//  border:2px solid blue;

`

const CardWrapper = styled.div`
display:flex;
// top:${props => props.top}px;
transform: translateY(${props => props.top}px);
top:${props => props.topOne}px;
transition:all .5s;
position:relative;
align-items:center;
// border:20px solid blue;
`

const Card = styled.img`
width:${props => props.dim}px;
height:${props => props.dim}px;
object-fit:cover;
position:absolute;
transform: translateY(${props => props.top}px);
z-index:${props => props.z};
opacity:${props => props.op};
margin:1.5em;
justify-content:space-between;
transition: all .5s;
// border:.2px solid red;
top:20px;

// box-shadow:${props=>props.shadow};

`

const Controls = styled.div`
display:flex;
// border:2px solid red;
justify-content:space-between;
width:25%;
`


const CtrlButton = styled.button`
position:absolute;
z-index:1;
width:200px;
margin:10px;
`


const default_data = 
[
  // "https://picsum.photos/200/300",
  // "https://picsum.photos/700/600",
  // "https://placekitten.com/800/800",
  // "https://placekitten.com/600/600",
  "1",
  "2",
  "2",
  "2",
]

export const CarouselVerticle = ({
  imgData = default_data,
  dim = 0,
  index,
  setIndex,
  data,
  setData,
  onClick=()=>{}
}) => {

  const {theme,setTheme} = useTheme()
  // when index is 0 left=0, when index is 1, left = -100, index is 2 left is -200 and so on........ 
  // const [index, setIndex] = useState(0)
  const [left, setLeft] = useState(0)
  // const [op, setOp] = useState(0);
  // const [data, setData] = useState("")
  const handleCarousel = (i)=>
  {
    if(i<0)
    {
      i=0
    }
    if (i>imgData.length-1)
    {
      i = 0
    }

    setIndex(i)
  }

  return <Cont>

    {/* <Card src={imgData[index]}/> */}

    <CardCont dim={dim-10}
   >
      <CardWrapper
      
       top={index * -80}>
          {imgData.map ((o,i)=>

        <Card
          onMouseOver={()=> {
            setIndex(i)
            setData(o)
          }}
          onClick={onClick}
          //changes the image size for card not in focus 
          dim = {i=== index?dim : dim-120}
          //changes the opacity for card not in focus 
          op = {i===index? 1 : .5}
          z={i===index? imgData.length+1 : imgData - 1}
          // topOne={i*(dim +50)}
          top={i*(dim -100)-300}
          src={o.thumb} 
          key={i}
          shadow={i===index?`-0px -5px 50px ${comp_theme[theme].accentTxt}`:null}
          />
          
          // </div>)
          )}
          
      </CardWrapper>
    </CardCont>


    {/* <Controls > 
        <CtrlButton onClick={()=> handleCarousel(index-1)}>P</CtrlButton>
        <CtrlButton onClick={()=> handleCarousel(index+1)}>N</CtrlButton>
    </Controls> */}

  </Cont>;
};




