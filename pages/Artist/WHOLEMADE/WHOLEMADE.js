import React, { useState } from "react";
import { motion, useViewportScroll } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./WHOLEMADE.module.css";
import { useTransition } from "react-spring";
import { useInView } from "react-intersection-observer";

const beige = "#d0bd95";

export default function WHOLEMADE(props) {
  const [main, setMain] = useState(false);
  const { scrollYProgress } = useViewportScroll;
  const y1 = useTransition(scrollYProgress, [0, 1], [0, 100]);
  const [ref, inView, entry] = useInView({ triggerOnce: false });
  const depth = 2;

  const fromUp = Boolean(depth > props.previous);
  props.setPrevious(depth);
  return (
    <motion.div
      className={styles.container}
      animate={{ opacity: 1, flexDirection: "column" }}
      initial={{ flexDirection: "row" }}
    >
      <motion.div
        className={styles.top}
        initial={{ width: "70vw", background: "#d43109" }}
        exit={{
          width: main ? "50vw" : "70vw",
          background: "#d43109",
          left: main ? "50%" : "0%",
        }}
        animate={{
          width: "100vw",
          background: "#d43109",
        }}
        transition={props.pageTransition}
      >
        <Link href="/">
          <motion.h2
            onTap={() => setMain(true)}
            className={styles.myName}
            exit={{
              top: main ? "50%" : "1rem",
              color: main ? "black" : "whitesmoke",
              transition: props.pageTransition,
            }}
          >
            Marvin Lee
          </motion.h2>
        </Link>
        <Link href="/Artist/Artist">
          <motion.h4
            className={styles.artist}
            aniation={{ opacity: "0%" }}
            transition={props.pageTransition}
          >
            Artist
          </motion.h4>
        </Link>
      </motion.div>
      <motion.div
        className={styles.gallery}
        initial={{ left: "50vw" }}
        exit={{
          left: "50vw",
          top: "0vh",
          width: "50vw",
          y: "0vh",
          opacity: 1,
        }}
        ref={ref}
        animate={{
          left: "0vw",
          top: `100vh`,
          width: inView ? "100vw" : "50vw",
          opacity: inView ? 1 : 0,
        }}
        transition={props.pageTransition}
      />
      <motion.div
        style={{ height: "100vh", width: "100vw", background: "black" }}
        exit={{ display: "none" }}
      ></motion.div>
      <motion.div
        exit={{ display: "none" }}
        style={{ height: "100vh", width: "100vw", background: "black" }}
      ></motion.div>
    </motion.div>
  );
}

export async function getStaticProps(context) {
  return {
    props: context,
  };
}
