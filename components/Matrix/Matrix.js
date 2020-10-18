import { motion, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import styles from "./Matrix.module.css";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import props from "../../pages/Designer/post/[id]";

const Transitions = [
  {
    exit: { y: "100%" },
    initial: { y: "100%" },
    animate: {
      y: 0,
    },
    hover: {
      scale: 1.1,
      filter: "blur(2px)",
      transition: { type: "tween", duration: 0.3 },
    },
  },
  {
    exit: { x: "-100%" },
    initial: { x: "-100%" },
    animate: {
      x: 0,
    },
    hover: {
      scale: 1.1,
      filter: "blur(2px)",
      transition: { type: "tween", duration: 0.3 },
    },
  },
  {
    exit: { x: "100%" },
    initial: { x: "100%" },
    animate: {
      x: 0,
    },
    hover: {
      scale: 1.1,
      filter: "blur(2px)",
      transition: { type: "tween", duration: 0.3 },
    },
  },
  {
    exit: { y: "-100%" },
    initial: { y: "-100%" },
    animate: {
      y: 0,
    },
    hover: {
      scale: 1.1,
      filter: "blur(2px)",
      transition: { type: "tween", duration: 0.3 },
    },
  },
];

const contentTransition = {
  hover: { opacity: 1 },
  rest: { opacity: 0 },
  transition: { type: "tween", duration: 0.3 },
};

export default function Matrix(props) {
  const controls = useAnimation();
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    let isMobileView = Boolean(
      navigator.userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setIsMobile(isMobileView);
  });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <motion.div className={styles.container} ref={ref}>
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,500&display=swap"
        rel="stylesheet"
      ></link>
      {props.images.map((item, index) => {
        const transition = Transitions[index];

        return (
          <motion.div
            className={styles.IndividualImage}
            whileHover="hover"
            whileTap="hover"
          >
            <motion.div
              style={{
                backgroundSize: "cover",
                backgroundImage: `url("${item.image}")`,
                backgroundPosition: "center",
                width: "100%",
                maxHeight: "100%",
              }}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="hover"
              animate={controls}
              variants={transition}
              transition={props.pageTransition}
            />
            <motion.h3
              className={styles.title}
              initial="rest"
              animate={isMobile ? "hover" : ""}
              variants={contentTransition}
            >
              {item.title}
            </motion.h3>
            <motion.hr
              width="70%"
              initial="rest"
              animate={isMobile ? "hover" : ""}
              variants={contentTransition}
              className={styles.horizontal}
            ></motion.hr>
            <Link href={`/${props.directory}/post/${item.id}`}>
              <motion.h3
                initial="rest"
                animate={isMobile ? "hover" : ""}
                variants={contentTransition}
                className={styles.overlay}
              >
                Discover
              </motion.h3>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
