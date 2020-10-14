import {
  motion,
  useElementScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Gallery from "../../components/Gallery/Gallery";
import styles from "./Programmer.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Matrix from "../../components/Matrix/Matrix";

const carousel = [
  { id: 0, url: "/MainPage/mainview.png" },
  { id: 1, url: "/MainPage/untitled.png" },
  { id: 2, url: "/MainPage/coffee front view.jpg" },
  { id: 3, url: "/MainPage/main.jpg" },
  { id: 4, url: "/MainPage/Rococo stool.jpg" },
];

export default function Programmer(props) {
  const [up, setUp] = useState(true);
  const router = useRouter();
  const depth = 1;
  const fromUp = depth > props.previous;

  const { scrollYProgress, scrollY } = useViewportScroll();
  const transform = useTransform(scrollYProgress, [0, 1], [0, 100]);

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
      <motion.h3 className={styles.introduction}>
        I am an artistically minded Engineer with interest in Machine Learning.
        I'd love to talk to you about the future and opportunities!
        <br />
        <br></br>
        My skills include
        <ul>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Tensorflow</li>
          <li>Sklearn</li>
          <li>Python3</li>
        </ul>
      </motion.h3>
    </motion.div>
  );
}
