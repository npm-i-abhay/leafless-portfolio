import * as React from "react";
// import "./styles.css";
import lottie from "lottie-web";
import animationData from "@/public/animation/plants.json";

export const LottieControl = ({animData}) => {
  const lottieRef = React.useRef(null);

  React.useEffect(() => {
    var animDuration = 10000;
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,

      animationData
    });

    function animatebodymovin(duration) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;

      const frame = (maxFrames / 70) * (scrollPosition / (duration / 100));

      anim.goToAndStop(frame, true);
    }
    const onScroll = () => {
      console.log("Scrolling");
      animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
const styles ={ 
  position: "fixed" , 
  width:'130%',
  zIndex:-1,
  top:'10%', 
  left:'3%',
  transform: 'rotate(270.5deg)',
  // height:'100%' , 
  opacity:.5}


  return <div style={styles} ref={lottieRef}></div>;
};


