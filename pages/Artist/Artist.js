import { motion } from "framer-motion";
import styles from "./Artist.module.css";
import Link from "next/link";
import Head from "next/head";
import Matrix from "../../components/Matrix/Matrix";
import { getSortedPostsData } from "../../lib/posts";

export default function Artist({ allPostsData, ...props }) {
  const data = JSON.parse(allPostsData);
  const allData = [];
  let temp = [];
  let i;
  for (i = 1; i <= data.length; i++) {
    temp.push(data[i - 1]);
    if ((i % 4 === 0) | (i === data.length)) {
      allData.push(temp);
      temp = [];
    }
  }

  return (
    <motion.div exit={{ opacity: 0 }} className={styles.container}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,500&display=swap"
          rel="stylesheet"
        ></link>
        <title>Marvin Lee</title>
      </Head>
      <motion.div className={styles.top}>
        <Link href="/">
          <motion.h2 className={styles.myName}>Marvin Lee</motion.h2>
        </Link>
        {allData.map((list) => {
          return (
            <Matrix
              pageTransition={props.pageTransition}
              images={list}
              directory={"Artist"}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export async function getStaticProps() {
  const allPostsData = JSON.stringify(getSortedPostsData("Artist"));

  return {
    props: { allPostsData },
  };
}
