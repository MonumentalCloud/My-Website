import { motion, useViewportScroll } from "framer-motion";
import Gallery from "../../components/Gallery/Gallery";
import styles from "./Artist.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const carousel = [
  { id: 0, url: "/MainPage/mainview.png" },
  { id: 1, url: "/MainPage/untitled.png" },
  { id: 2, url: "/MainPage/coffee front view.jpg" },
  { id: 3, url: "/MainPage/main.jpg" },
  { id: 4, url: "/MainPage/Rococo stool.jpg" },
];

export default function Artist(props) {
  const [up, setUp] = useState(true);
  const router = useRouter();
  const depth = 1;
  const fromUp = depth > props.previous;

  const { ref } = useRef();
  const { scrollYProgress } = useViewportScroll(ref);

  props.setPrevious(depth);
  return (
    <motion.div exit={{ display: "none" }} className={styles.container}>
      <Link href="/">
        <motion.h2 className={styles.myName}>Marvin Lee</motion.h2>
      </Link>
      <motion.div className={styles.gallery} ref={ref}>
        <img src="/MM-1.jpg" style={{ display: "flex", x: scrollYProgress }} />
      </motion.div>
    </motion.div>
  );
}
