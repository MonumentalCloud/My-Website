import { motion } from "framer-motion";
import styles from "./Programmer.module.css";
import Link from "next/link";
import Gallery from "../../components/Gallery/Gallery";

const carousel = [
  { id: 0, url: "/MainPage/mainview.png" },
  { id: 1, url: "/MainPage/untitled.png" },
  { id: 2, url: "/MainPage/coffee front view.jpg" },
  { id: 3, url: "/MainPage/main.jpg" },
  { id: 4, url: "/MainPage/Rococo stool.jpg" },
];

const pageTransition = { stiffness: 70, damping: 20, duration: 1 };

export default function Programmer(props) {
  return (
    <motion.div className={styles.container}>
      <motion.div
        className={styles.left}
        exit={{ x: "100%", background: "#d43109" }}
        initial={{ x: "100%" }}
        animate={{
          x: 0,
          background: "#dbcfb6",
        }}
        transition={pageTransition}
      >
        <Link href="/">
          <motion.h2
            style={{
              fontFamily: "Helvetica Neue",
              color: "black",
              position: "absolute",
              left: "1rem",
              cursor: "pointer",
            }}
            initial={{ top: "50%" }}
            animate={{ top: "1rem" }}
            exit={{ top: "50%" }}
            transition={pageTransition}
          >
            Marvin Lee
          </motion.h2>
        </Link>
      </motion.div>

      <Gallery
        list={carousel}
        style={{
          position: "absolute",
          left: 0,
          width: "50%",
          height: "100%",
          overflow: "hidden",
        }}
      />

      <div className={styles.right}></div>
    </motion.div>
  );
}
