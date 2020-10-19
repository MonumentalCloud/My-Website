import Head from "next/head";
import { useSpring, animated, config } from "react-spring";
//import styles from "./HomePage.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import Menu from "../../components/Menu/Menu.js";
import Gallery from "../../components/Gallery/Gallery";
import styles from "./HomePage.module.css";

const hats = ["Artist", "Programmer", "Designer"];
const carousel = [
  { id: 0, url: "/MainPage/mainview.png" },
  { id: 1, url: "/MainPage/untitled.png" },
  { id: 2, url: "/MainPage/coffee front view.jpg" },
  { id: 3, url: "/MainPage/main.jpg" },
  { id: 4, url: "/MainPage/Rococo stool.jpg" },
];

export default function HomePage(props) {
  const [isToggle, setToggle] = useState(false);
  const [vertical, setVertical] = useState(false);
  const fadeIn = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: config.molasses,
  });
  props.setPrevious(0);

  useLayoutEffect(() => {
    const tell = () => {
      if (window.innerHeight >= window.innerWidth) {
        setVertical(true);
      } else {
        setVertical(false);
      }
    };

    tell();

    window.addEventListener("resize", tell);
  });

  console.log(vertical);

  return (
    <motion.div
      className={styles.container}
      style={{ flexDirection: vertical ? "column" : "row" }}
      key="container"
      exit={{ x: 0 }}
    >
      <Head key="head">
        <title>Marvin Lee</title>
      </Head>
      <motion.div
        key="left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={props.pageTransition}
        className={styles.left}
        style={{
          height: vertical ? "50vh" : "100vh",
          width: vertical ? "100vw" : "50vw",
        }}
        onClick={() => setToggle(!isToggle)}
      >
        <Gallery key="gallery" list={carousel} vertical={vertical} />
      </motion.div>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: "0vw", width: vertical ? "100vw" : "50vw" }}
        exit={{ width: "100%", x: "-43vw" }}
        transition={props.pageTransition}
        className={styles.right}
        onClick={() => setToggle(!isToggle)}
        style={{
          height: vertical ? "50vh" : "100vh",
          width: vertical ? "100vw" : "50vw",
        }}
        key="right"
      >
        <motion.div
          className={styles.big}
          transition={props.pageTransition}
          exit={{
            left: vertical ? "-3em" : "0.5em",
            top: vertical ? "50%" : "1em",
          }}
          key="big"
        >
          <motion.h2
            transition={props.pageTransition}
            onClick={() => setToggle(!isToggle)}
            className={styles.myName}
            key="myName"
          >
            Marvin Lee
          </motion.h2>
          <motion.div key="menu" className={styles.menu} exit={{ opacity: 0 }}>
            <Menu list={hats} isToggle={isToggle} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
