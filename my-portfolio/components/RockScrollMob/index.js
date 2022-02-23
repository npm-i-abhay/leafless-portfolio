import * as React from "react";
// import "./styles.css";
import lottie from "lottie-web";
import animationData from "@/public/animation/rock.json";

export const RockControlMob = ({animData, width='50%'}) => {
  const lottieRef = React.useRef(null);

  React.useEffect(() => {
    var animDuration = 10000;
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: false,

      animationData
    });

    function animatebodymovin(duration) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;

      const frame = (maxFrames / 150) * (scrollPosition / (duration / 200));

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

  return <div style={{width:'100%'}} ref={lottieRef}></div>;
};


