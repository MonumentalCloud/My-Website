import React from "react";
import { useSpring, config, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  -(x - window.innerWidth / 2) / 20,
  1.5,
];
const trans = (x, y, s) => `translate(${y}px,${x}px) scale(${s})`;

export default function Photos(props) {
  const [rotate, set] = useSpring(() => ({
    xys: [0, 0, 1.3],
    config: { mass: 5, tension: 350, friction: 70 },
  }));

  return (
    <animated.img
      src={props.src}
      onMouseMove={({ clientX: x, clientY: y }) => {
        set({ xys: calc(x, y) });
      }}
      onMouseLeave={() => {
        set({ xys: [0, 0, 1.7] });
      }}
      style={{
        transform: rotate.xys.interpolate((x, y, s) => trans(x, y, s)),
        objectFit: "cover",
        objectPosition: "center",
        width: props.vertical ? "100%" : "none",
        height: props.vertical ? "none" : "100%",
      }}
    />
  );
}
