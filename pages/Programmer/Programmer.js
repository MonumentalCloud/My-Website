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

  const containerTransition = {
    hidden: {
      display: "none",
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
    show: {
      display: "block",
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const transition2 = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const transition3 = {
    hidden: { opacity: 0, x: 50, transform: "rotateX(100)" },
    show: {
      opacity: 1,
      x: 0,
      transform: "rotateX(0)",
      transition: {
        type: "spring",
        bounce: 1,
      },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 1,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 1,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: false,
    threshold: 1,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: false,
    threshold: 1,
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
        initial="hidden"
        animate={inView && !inView2 ? "show" : "hidden"}
        variants={containerTransition}
        transition={props.pageTransition}
        className={styles.bigbag}
      >
        <motion.h1 className={styles.header} variants={transition2}>
          <a href="https://github.com/MonumentalCloud" target="_blank">
            Hello there!
          </a>
        </motion.h1>
        <motion.h3 className={styles.introduction} variants={transition2}>
          I am an artistically-minded engineer with interest in Machine Learning
          and Fintech. I'd love to talk to you about the future!
        </motion.h3>
        <motion.img
          className={styles.logos}
          src="/Programmer/1280px-React-icon.svg.png"
          variants={transition2}
        />
        <motion.img
          className={styles.logos}
          src="/Programmer/5848152fcef1014c0b5e4967.png"
          variants={transition2}
        />
        <motion.img
          variants={transition2}
          className={styles.logos}
          src="/Programmer/logo-javascript-logo-png-transparent.png"
        />
        <motion.img
          variants={transition2}
          className={styles.logos}
          src="/Programmer/lockup.svg"
        />
      </motion.div>
      <motion.div className={styles.invisible} ref={ref2}></motion.div>
      <motion.div
        initial="hidden"
        animate={inView2 && !inView3 ? "show" : "hidden"}
        variants={containerTransition}
        className={styles.bigbag}
      >
        <motion.h1 className={styles.header} variants={transition2}>
          <a
            href="https://github.com/MonumentalCloud/My-Website"
            target="_blank"
          >
            Web Dev
          </a>
        </motion.h1>

        <motion.h3
          variants={transition2}
          className={styles.introduction}
          style={{ top: "100vh" }}
        >
          I bring my expertise in art and design to web app development,
          creating considered and intuitive front-end experiences. I utilize{" "}
          <span>React.js</span>, <span>Next.js</span>, and{" "}
          <span>React Native</span>, to create an integrated and scalable
          experience.
        </motion.h3>
      </motion.div>
      <motion.div className={styles.invisible} ref={ref3}></motion.div>
      <motion.div
        initial="hidden"
        className={styles.bigbag}
        animate={inView3 && !inView4 ? "show" : "hidden"}
        variants={containerTransition}
      >
        <motion.h1 variants={transition2} className={styles.header}>
          <a
            href="https://github.com/MonumentalCloud/Pradanator"
            target="_blank"
          >
            Machine Learning
          </a>
        </motion.h1>
        <motion.h3
          variants={transition2}
          className={styles.introduction}
          style={{ top: "150vh" }}
        >
          I have experience in RNN and CNN, and currently learing about
          Reinforcement Learning. My tool of choice is Tensorflow, but I also
          have some experience in SciKit learn.
        </motion.h3>
      </motion.div>
      <motion.div
        className={styles.invisible}
        ref={ref4}
        style={{ marginBottom: 0 }}
      ></motion.div>

      <motion.div
        initial="hidden"
        className={styles.bigbag}
        animate={inView4 ? "show" : "hidden"}
        style={{
          justifyContent: "space-around",
          width: "90vw",
        }}
        variants={containerTransition}
        style={{ marginBottom: 0 }}
      >
        <motion.div
          className={styles.linkbox}
          variants={transition3}
          whileHover={{ borderRadius: "10%", boxShadow: "-10px -10px black" }}
          style={{
            backgroundImage: "url(/Programmer/github_PNG15.png)",
            backgroundColor: "white",
          }}
        >
          <a
            href="https://github.com/MonumentalCloud"
            className={styles.links}
            style={{ color: "white" }}
            target="_blank"
          />
        </motion.div>
        <motion.div
          className={styles.linkbox}
          variants={transition3}
          whileHover={{ borderRadius: "10%", boxShadow: "-10px -10px black" }}
          style={{
            backgroundImage: `url(/Programmer/LinkedIn-Logo.wine.png)`,
            backgroundColor: "white",
          }}
        >
          <a
            href="https://linkedin.com/in/marvin-lee-102302114"
            className={styles.links}
            target="_blank"
          />
        </motion.div>
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
