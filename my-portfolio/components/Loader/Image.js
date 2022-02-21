import React from "react";
import styled from "styled-components";

const MyImage = styled.img``

const Image = ({source,alt}) => {
  return (
    <picture>
      
      <MyImage src={source} alt={alt} />
    </picture>
  );
};

export default Image;