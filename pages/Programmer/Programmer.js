import styles from "./Programmer.module.css";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Programmer(props) {
  const depth = 1;
  const [height, setHeight] = useState();
  useEffect(() => {
    setHeight(window.innerHeight);
  });

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.8,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.8,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: false,
    threshold: 0.8,
  });
  const { scrollY } = useViewportScroll();
  const transform = useTransform(scrollY, [0, height], [0, 100]);
  const first = useTransform(transform, [0, 100], [0, -100]);

  props.setPrevious(depth);
  return (
    <motion.div exit={{ opacity: 0 }} className={styles.container}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,500&display=swap"
          rel="stylesheet"
        ></link>
        <title>Marvin Lee</title>
      </Head>

      <Link href="/">
        <motion.h2 className={styles.myName}>Marvin Lee</motion.h2>
      </Link>
      <motion.div className={styles.invisible} ref={ref}></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={props.pageTransition}
        className={styles.bigbag}
      >
        <motion.h1 style={{ y: first }} className={styles.header}>
          <a href="https://github.com/MonumentalCloud" target="_blank">
            Hello there!
          </a>
        </motion.h1>
        <motion.h3 className={styles.introduction}>
          I am an artistically-minded engineer with interest in Machine Learning
          and Fintech. I'd love to talk to you about the future!
        </motion.h3>
        <motion.img
          className={styles.logos}
          src="/Programmer/1280px-React-icon.svg.png"
        />
        <motion.img
          className={styles.logos}
          src="/Programmer/5848152fcef1014c0b5e4967.png"
        />
        <motion.img
          className={styles.logos}
          src="/Programmer/logo-javascript-logo-png-transparent.png"
        />
        <motion.img className={styles.logos} src="/Programmer/lockup.svg" />
      </motion.div>
      <motion.div className={styles.invisible} ref={ref2}></motion.div>
      <motion.div
        animate={{ opacity: inView2 ? 1 : 0 }}
        className={styles.bigbag}
      >
        <motion.h1 className={styles.header}>
          <a
            href="https://github.com/MonumentalCloud/My-Website"
            target="_blank"
          >
            Web Development
          </a>
        </motion.h1>

        <motion.h3 className={styles.introduction} style={{ top: "100vh" }}>
          I bring my expertise in art and design to web app development,
          creating considered and intuitive front-end experiences. I utilize{" "}
          <span>React.js</span>, <span>Next.js</span>, and{" "}
          <span>React Native</span>, to creatd integrated and scalable
          experience.
        </motion.h3>
      </motion.div>
      <motion.div className={styles.invisible} ref={ref3}></motion.div>
      <motion.div
        className={styles.bigbag}
        animate={{ opacity: inView3 ? 1 : 0 }}
      >
        <motion.h1 className={styles.header}>
          <a
            href="https://github.com/MonumentalCloud/Pradanator"
            target="_blank"
          >
            Machine Learning
          </a>
        </motion.h1>
        <motion.h3 className={styles.introduction} style={{ top: "150vh" }}>
          I also love working with images in Machine Learning. I have experience
          in RNN and CNN, and currently learing about a Reinforcement Learning.
          My tool of choice is Tensorflow, but I also have some experience in
          SciKit learn.
        </motion.h3>
      </motion.div>
      <motion.div
        className={styles.bigbag}
        animate={{
          x: [0, 5, -5, 0],
          transition: { type: "spring", repeat: Infinity, repeatDelay: 1 },
        }}
      >
        <a
          href="https://github.com/MonumentalCloud"
          className={styles.introduction}
          style={{ borderBottom: "none", color: "white" }}
          target="_blank"
        >
          Check out my Github!
        </a>
      </motion.div>
      <style jsx>{`
        a {
          color: black;
          text-decoration: none;
        }
      `}</style>
    </motion.div>
  );
}
