import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

const AnimatedBox = animated(Box);

const SmoothBackground = ({ imageSrc }: { imageSrc: string }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // map client X and Y from –1 to +1
      setCoords({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    let animationFrame: number;
    const throttledMove = (e: MouseEvent) => {
      if (!animationFrame) {
        animationFrame = requestAnimationFrame(() => {
          handleMouseMove(e);
          animationFrame = 0;
        });
      }
    };

    window.addEventListener("mousemove", throttledMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const spring = useSpring({
    // shift the background by up to ±5%
    backgroundPosition: `${50 + coords.x * 5}% ${50 + coords.y * 5}%`,
    config: { mass: 10, tension: 120, friction: 60 },
  });

  return (
    <AnimatedBox
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      style={spring}
    />
  );
};

export default SmoothBackground;
