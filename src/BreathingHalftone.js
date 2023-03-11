import { useEffect, useRef } from "react";
import "./halftone";

const BreathingHalftone = ({
  src,
  alt = "Breathing Halftone",
  options = {
    dotSize: 1 / 100,
    channelFillStyles: {
      additive: {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF",
        lum: "#FFF",
      },
      subtractive: {
        red: "#00FFFF",
        green: "#FF00FF",
        blue: "#FFFF00",
        lum: "#999",
      },
    },
  },
}) => {
  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef.current) {
      const BreathingHalftone = window.BreathingHalftone;
      new BreathingHalftone(imgRef.current, options);
    }
  }, [options, imgRef]);

  return <img ref={imgRef} id="targetImg" alt={alt} src={src} data-src={src} />;
};

export default BreathingHalftone;
