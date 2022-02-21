import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swipeable} from "react-swipeable";
// import "./App.css";

import {Row, Container, Image} from './styles'
function Slider({ slides }) {
  const [position, positionSet] = useState(0);
  const handleSwipe = ({ dir }) => {
    if (dir === "Right") {
      if (position < imgData3.length - 1) {
        positionSet(position + 1);
      }
    }
    if (dir === "Left") {
      if (position > 0) {
        positionSet(position - 1);
      }
    }
  };
  const imgData3 = 
[
  "/about/music2.jpeg",
  "/about/synth.png",
]
  return (
    <Swipeable onSwiped={handleSwipe} className='SwipeContainer' >
        <Row>
        {imgData3.map((url, index) => (
          <motion.Container
            className="container"
            key={index}
            initial={{ scale: 0, rotation: -180 }}
            animate={{
              rotate: 0,
              left: `${(index - position) * 60 - 30}vw`,
              scale: index === position ? 1 : 0.8,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Image src={url} alt='' ></Image>
          </motion.Container>
        ))}
      </Row>
    </Swipeable>
  );
}

export default Slider;