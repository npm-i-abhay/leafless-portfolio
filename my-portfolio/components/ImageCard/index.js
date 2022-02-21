import React from 'react';



// styled components imports
import { ImageCont, Image } from './styles';

export const ImageContainer = ({imgUrl="http://placekitten.com/300/400"}) => {
  return <ImageCont>
      <Image src={imgUrl}/>
    </ImageCont>;
};


