import styles from "./Programmer.module.css";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
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
  const transform = useTransform(scrollY, [0, 500], [0, 1]);
  const opacity = useTransform(transform, [0, 0.2, 0.4, 1], [1, 1, 0, 0]);
  const blur = useTransform(
    transform,
    [0, 0.2, 0.4, 1],
    ["blur(0px)", "blur(0px)", "blur(10px)", "blur(10px)"]
  );
  const opacity2 = useTransform(transform, [0, 0.5, 0.7, 1], [0, 1, 1, 0]);
  const blur2 = useTransform(
    transform,
    [0, 0.5, 0.7, 1],
    ["blur(0px)", "blur(0px)", "blur(0px)", "blur(10px)"]
  );
  const opacity3 = useTransform(transform, [0, 0.8, 1], [0, 0, 1]);

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
      <motion.div
        style={{
          top: "35vh",
          position: "sticky",
          opacity: opacity,
          filter: blur,
          overflow: "cover",
        }}
      >
        <motion.h1 className={styles.header}>
          <a href="https://github.com/MonumentalCloud" target="_blank">
            Hello there!
          </a>
        </motion.h1>
        <motion.h3 className={styles.introduction}>
          I am a team oriented engineer with interest in Machine Learning and
          Fintech. I'd love to talk to you about the future!
        </motion.h3>
        <motion.div
          className={styles.logos}
          style={{
            backgroundImage: `url("/Programmer/590-5903330_reactjs-logo-react-js-transparent-icon-hd-png.png")`,
          }}
        />
      </motion.div>
      <motion.div
        style={{
          top: "35vh",
          position: "sticky",
          opacity: opacity2,
          filter: blur2,
        }}
      >
        <motion.h1 className={styles.header}>
          <a
            href="https://github.com/MonumentalCloud/My-Website"
            target="_blank"
          >
            Web Dev
          </a>
        </motion.h1>

        <motion.h3 className={styles.introduction} style={{ top: "100vh" }}>
          I bring my expertise in art and design to web app development,
          utilizing <span>React.js</span>, <span>Next.js</span>, and{" "}
          <span>React Native</span>
        </motion.h3>
      </motion.div>
      <motion.div
        style={{ top: "35vh", position: "sticky", opacity: opacity3 }}
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
      <style jsx>{`
        a {
          color: black;
          text-decoration: none;
        }
      `}</style>
    </motion.div>
  );
}
