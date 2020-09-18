import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { useTrail, animated, config } from "react-spring";

export default function Menu(props) {
  const trailer = useTrail(props.list.length, {
    opacity: props.isToggle ? 1 : 0,
    height: props.isToggle ? 20 : 0,
    display: props.isToggle ? "block" : "none",
    config: config.stiff,

    from: { opacity: 0, height: 0 },
  });
  return trailer.map(({ ...rest }, index) => (
    <animated.div style={{ ...rest }}>
      <MenuItem
        destination={`/${props.list[index]}/${props.list[index]}`}
        text={props.list[index]}
      />
    </animated.div>
  ));
}
