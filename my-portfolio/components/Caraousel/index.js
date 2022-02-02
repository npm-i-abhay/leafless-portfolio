// import React, {useState, useEffect} from 'react';
// import styled from 'styled-components';

// const Cont = styled.div`
// display:inline-flex;
// flex-direction:column;
// `

// const CardCont = styled.div`
// display:flex;
// border:2px solid green;
// max-width:${props => props.dim}px;
// overflow:hidden;
// // padding:5px;
// `

// const CardWrapper = styled.div`
// display:flex;
// left:${props => props.left}px;
// transition: all .5s;
// position:relative;
// align-items:center;
// justify-content:center;
// `

// const Card = styled.img`
// width:${props => props.dim}px;
// height:${props => props.dim}px;
// object-fit:cover;
// position:relative;
// left:${props => props.left}px;
// z-index:${props => props.z};
// opacity:${props => props.op};
// margin-left:100px;
// transition:all .5s;
// `

// const Controls = styled.div`
// display:flex;
// border:2px solid red;
// justify-content:space-between;
// `

// const CtrlButton = styled.button``


// const default_data = [
//   "https://placekitten.com/500/500",
//   "https://placekitten.com/1000/1000",
//   "https://placekitten.com/800/800",
//   "https://placekitten.com/600/600",
// ]

// export const Carousel = ({
//   imgData = default_data,
//   dim = 100
// }) => {

//   // when index is 0 left=0, when index is 1, left = -100, index is 2 left is -200 and so on........ 
//   const [index, setIndex] = useState(0)
//   const [left, setLeft] = useState(0)
//   // const [op, setOp] = useState(0);

//   const handleCarousel = (i)=>
//   {
//     if(i<0)
//     {
//       i=0
//     }
//     if (i>imgData.length-1)
//     {
//       i = imgData.length-1
//     }

//     setIndex(i)
//   }

//   return <Cont>
//     Carousel
//     {/* <Card src={imgData[index]}/> */}

//     <CardCont dim={dim + 450}>
//       <CardWrapper left={index * -10}>
//           {imgData.map ((o,i)=><Card
//           dim = {i=== index?dim : dim-5}
//           op = {i===index? 1 : .5}
//           z={i===index? imgData.length+1 : imgData - 1}
//           left={i*-(dim -50)+30}
//           src={o} 
//           key={i}/>)}
//       </CardWrapper>
//     </CardCont>


//     <Controls > 
//         <CtrlButton onClick={()=> handleCarousel(index-1)}>P</CtrlButton>
//         <CtrlButton onClick={()=> handleCarousel(index+1)}>N</CtrlButton>
//     </Controls>

//   </Cont>;
// };


import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display:inline-flex;
flex-direction:column;
`

const CardCont = styled.div`
// height:80vh;
width:40vw;
// width:${props => props.dim}px;
height:${props => props.dim}px;
display:flex;
align-items:center;
border:2px solid green;
max-width:${props => props.dim}px;
overflow:hidden;
border:5px solid black;
// padding:5px;
`

const CardWrapper = styled.div`
display:flex;
// top:${props => props.left}px;
// transform: translateY(${props => props.top}px);
top:${props => props.topOne}px;
transition: all .5s;
position:relative;
align-items:center;
// justify-content:center;
// margin-left:100px;
border:2px solid blue;
`

const Card = styled.img`
width:${props => props.dim}px;
height:${props => props.dim}px;
// width:100px;
// height:100px;
object-fit:cover;
position:absolute;
transform: translateY(${props => props.top}px);
z-index:${props => props.z};
opacity:${props => props.op};
// margin-left:100px;
transition:all .5s;
border:2px solid yellow;
display:flex;
justify-content:space-around;
`

const Controls = styled.div`
display:flex;
border:2px solid red;
justify-content:space-between;
`

const CtrlButton = styled.button``


const default_data = 
[
  "https://placekitten.com/500/500",
  "https://placekitten.com/1000/1000",
  "https://placekitten.com/800/800",
  "https://placekitten.com/600/600",
]

export const Carousel = ({
  imgData = default_data,
  dim = 0
}) => {

  // when index is 0 left=0, when index is 1, left = -100, index is 2 left is -200 and so on........ 
  const [index, setIndex] = useState(0)
  const [left, setLeft] = useState(0)
  // const [op, setOp] = useState(0);

  const handleCarousel = (i)=>
  {
    if(i<0)
    {
      i=0
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

    <CardCont dim={dim + 700}>
      <CardWrapper
       top={index * -50}>
          {imgData.map ((o,i)=><Card
          //changes the image size for card not in focus 
          dim = {i=== index?dim : dim-100}
          //changes the opacity for card not in focus 
          op = {i===index? 1 : .5}
          z={i===index? imgData.length+1 : imgData - 1}
          topOne={i*-(dim -30)}
          top={i*-(dim -30)+150}
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




