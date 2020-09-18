import { motion } from "framer-motion";
import Gallery from "../../components/Gallery/Gallery";
import styles from "./Artist.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

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

  props.setPrevious(depth);
  return (
    <motion.div className={styles.container}>
      <motion.div
        className={styles.left}
        exit={{ x: up ? "100%" : "0%", width: up ? "50%" : "70%" }}
        initial={{ x: fromUp ? "100%" : 0, width: fromUp ? "50%" : "70%" }}
        animate={{
          x: 0,
          width: "70%",
        }}
        transition={props.pageTransition}
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
            initial={{
              top: fromUp ? "50%" : "1rem",
              color: fromUp ? "black" : "whitesmoke",
            }}
            animate={{ top: "1rem", color: "whitesmoke" }}
            exit={{
              top: up ? "50%" : "1rem",
              color: up ? "black" : "whitesmoke",
            }}
            transition={props.pageTransition}
          >
            Marvin Lee
          </motion.h2>
        </Link>
        <Link href="/Artist/WHOLEMADE/WHOLEMADE">
          <motion.h4
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={props.pageTransition}
            style={{
              position: "absolute",
              left: "1rem",
              top: "3em",
              cursor: "pointer",
            }}
            onTap={() => setUp(false)}
          >
            WHOLEMADE
          </motion.h4>
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

      <div className={styles.right} />
    </motion.div>
  );
}
