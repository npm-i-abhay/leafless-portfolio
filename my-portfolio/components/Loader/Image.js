import React from "react";

const Image = ({source}) => {
  return (
    <picture>
      
      <img src={source}  />
    </picture>
  );
};

export default Image;