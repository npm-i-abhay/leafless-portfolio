import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display:inline-flex;
flex-direction:column;
`

const CardCont = styled.div`
display:flex;
border:2px solid green;
// max-width:${props => props.dim}vw;
max-width:100vw;
height:60vh;
overflow:hidden;
// padding:5px;
`

const CardWrapper = styled.div`
display:flex;
left:${props => props.left}vw;
transition: all .5s;
position:relative;
align-items:center;
justify-content:center;
`

const Card = styled.img`
width:${props => props.dim}vw;
height:${props => props.dim}vw;
object-fit:cover;
position:relative;
left:${props => props.left}vw;
z-index:${props => props.z};
opacity:${props => props.op};

margin-left:${props => props.margin}em;
margin-right:${props => props.margin}em;
transition:all .5s;
`

const Controls = styled.div`
display:flex;
// border:2px solid red;
justify-content:space-between;
`

const CtrlButton = styled.button``


const default_data = [
  "https://placekitten.com/500/500",
  "https://placekitten.com/1000/1000",
  "https://placekitten.com/800/800",
  "https://placekitten.com/600/600",
]

export const Carousel = ({
  imgData = default_data,
  dim = 100
}) => {

  // when index is 0 left=0, when index is 1, left = -100, index is 2 left is -200 and so on........ 
  const [index, setIndex] = useState(0)
  const [left, setLeft] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0)
  const [margin, setMargin] = useState(5)

  useEffect(()=>
  {
    setScreenWidth(window.innerWidth)

    if(screenWidth < 600)
    {
      setMargin(1.5)
      console.log(true)
    }
    
      else setMargin(5)
    
    console.log(screenWidth)

  },[screenWidth])
  // const [op, setOp] = useState(0);

  const handleCarousel = (i)=>
  {
    if(i<0)
    {
      i = 0
    }
    if (i>imgData.length-1)
    {
      i = imgData.length-1
    }

    setIndex(i)
  }


  return <Cont>
    Carousel
    {/* <Card src={imgData[index]}/> */}

    <CardCont dim={dim + 10}>
      <CardWrapper left={index * -15}>
          {imgData.map ((o,i)=>
          <Card
            onClick={()=> setIndex(i)}
            dim = {i=== index?dim: dim-25}
            op = {i===index? 1 : .5}
            z={i===index? imgData.length+1 : imgData - 1}
            left={i*-(dim -30)+10}
            margin={margin}
            src={o} 
            key={i}/>)}
      </CardWrapper>
    </CardCont>


    <Controls > 
        <CtrlButton onClick={()=> handleCarousel(index-1)}>P</CtrlButton>
        <CtrlButton onClick={()=> handleCarousel(index+1)}>N</CtrlButton>
    </Controls>

  </Cont>;
};

