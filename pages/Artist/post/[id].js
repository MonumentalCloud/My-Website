import React, { useState, useEffect } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./[id].module.css";
import { useInView } from "react-intersection-observer";
import { getAllPostIds, getPostData } from "../../../lib/posts.js";

const beige = "#d0bd95";

export default function props({ finalData }) {
  let data = JSON.parse(finalData);
  console.log(data.contentHTML);
  const [height, setHeight] = useState();
  useEffect(() => {
    setHeight(window.innerHeight);
  });

  const { scrollY } = useViewportScroll();
  const translated = useTransform(scrollY, [0, height], [0, 1]);
  const parallax = useTransform(translated, [0, 1], [0, -400]);
  const intro = useTransform(translated, [0, 0.5], [1, 0]);

  return (
    <motion.div exit={{ opacity: 0 }} className={styles.container}>
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,500&display=swap"
        rel="stylesheet"
      ></link>
      <Link href="/">
        <motion.h2 className={styles.myName}>Marvin Lee</motion.h2>
      </Link>
      <motion.h3
        className={styles.title}
        style={{ opacity: intro, y: parallax }}
      >
        {data.data.title}
      </motion.h3>
      <motion.svg
        className={styles.arrows}
        animate={{ y: [0, -10.25, 0], transition: { repeat: Infinity } }}
        style={{ opacity: intro }}
        width="100"
        height="100"
      >
        <path class="a1" d="M20 0 L50 35 L80 0"></path>
      </motion.svg>
      <motion.div
        style={{
          background: `url("${data.data.image}")`,
          backgroundSize: "contain",
          opacity: intro,
        }}
        className={styles.mainImage}
      />
      <motion.div
        dangerouslySetInnerHTML={{ __html: data.contentHTML }}
        className={styles.introduction}
      />
      <style global jsx>{`
        div p {
          margin-bottom: 5em;
          margin-top: 5em;
        }

        div img {
          max-width: 70vw;
          margin-top: 3em;
        }
      `}</style>
    </motion.div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds("Artist");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id, "Artist");
  const finalData = JSON.stringify(postData);
  return {
    props: { finalData },
  };
}
