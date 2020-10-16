import Photos from "../Photo/Photo";
import styles from "./Gallery.module.css";
import { useTransition, config, animated } from "react-spring";
import { useState, useEffect } from "react";

export default function Gallery(props) {
  const slide = props.list;
  const [index, set] = useState(0);
  const transition = useTransition(slide[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { friction: 50 },
  });
  const vertical = props.vertical;
  useEffect(
    () =>
      void setInterval(() => set((state) => (state + 1) % slide.length), 4000),
    []
  );

  return transition.map(({ item, props, key }) => {
    return (
      <animated.div className={styles.gallery} key={key} style={props}>
        <Photos src={item.url} vertical={vertical} />
      </animated.div>
    );
  });
}
