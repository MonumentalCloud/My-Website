import styles from "./About.module.css";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTrail } from "react-spring";

export default function Programmer(props) {
  const depth = 1;
  const [height, setHeight] = useState();
  useEffect(() => {
    setHeight(window.innerHeight);
  });

  const { scrollY } = useViewportScroll();
  const transform = useTransform(scrollY, [0, height], [0, 1]);
  const opacity = useTransform(transform, [0, 0.5, 1], [0.2, 1, 1]);

  props.setPrevious(depth);
  return (
    <motion.div exit={{ opacity: 0 }} className={styles.container}>
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,500&display=swap"
        rel="stylesheet"
      ></link>

      <Link href="/">
        <motion.h2 className={styles.myName}>Marvin Lee</motion.h2>
      </Link>
      <motion.h1 className={styles.header} style={{ opacity: opacity }}>
        Hello there!
      </motion.h1>
      <motion.h3 className={styles.introduction}>
        I am an team oriented Engineer with interest in Machine Learning and
        Fintech. I'd love to talk to you about the future!
      </motion.h3>
      <motion.h3 className={styles.introduction}>
        I bring my expertise in art and design to web app development, utilizing{" "}
        <span>React.js</span>, <span>Next.js</span>, and{" "}
        <span>React Native</span>
      </motion.h3>
      <motion.h3 className={styles.introduction}>
        I also love working with images in Machine Learning.
      </motion.h3>
    </motion.div>
  );
}
