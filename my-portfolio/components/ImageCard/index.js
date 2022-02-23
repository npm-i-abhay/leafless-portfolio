import React from 'react';



// styled components imports
import { ImageCont, Image } from './styles';

export const ImageContainer = ({
  imgUrl="http://placekitten.com/300/400" ,
  animate, 
  inView,
  width='30%'
}) => {
  return <ImageCont 
            width={width}
            initial={{opacity:1}} 
            whileHover={animate} 
            whileInView={inView} 
            viewport={{once: true}}>
      <Image src={imgUrl} alt='' />
    </ImageCont>;
};


