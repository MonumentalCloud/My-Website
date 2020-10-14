import Head from "next/head";
import { useSpring, animated, config } from "react-spring";
//import styles from "./HomePage.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Menu from "../../components/Menu/Menu.js";
import Gallery from "../../components/Gallery/Gallery";
import styles from "./HomePage.module.css";

const hats = ["Artist", "Programmer", "Designer", "About"];
const carousel = [
  { id: 0, url: "/MainPage/mainview.png" },
  { id: 1, url: "/MainPage/untitled.png" },
  { id: 2, url: "/MainPage/coffee front view.jpg" },
  { id: 3, url: "/MainPage/main.jpg" },
  { id: 4, url: "/MainPage/Rococo stool.jpg" },
];

export default function HomePage(props) {
  const [isToggle, setToggle] = useState(false);
  const fadeIn = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: config.molasses,
  });
  props.setPrevious(0);

  return (
    <motion.div className={styles.container}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={props.pageTransition}
        className={styles.left}
      >
        <Gallery list={carousel} />
      </motion.div>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: "0vw", width: "50%" }}
        exit={{ width: "100%", x: "-33vw" }}
        transition={props.pageTransition}
        className={styles.right}
      >
        <motion.h2
          exit={{ left: "0.5em", top: "0.5em", position: "absolute" }}
          transition={props.pageTransition}
          onClick={() => setToggle(!isToggle)}
          className={styles.myName}
        >
          Marvin Lee
        </motion.h2>
        <div className={styles.menu}>
          <Menu list={hats} isToggle={isToggle} />
        </div>
      </motion.div>
    </motion.div>
  );
}
