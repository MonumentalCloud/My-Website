import Head from "next/head";
import { useSpring, animated, config } from "react-spring";
//import styles from "./HomePage.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Menu from "../../components/Menu/Menu.js";
import Gallery from "../../components/Gallery/Gallery";

const hats = ["Artist", "Programmer", "Designer"];
const carousel = [
  { id: 0, url: "/MainPage/mainview.png" },
  { id: 1, url: "/MainPage/untitled.png" },
  { id: 2, url: "/MainPage/coffee front view.jpg" },
  { id: 3, url: "/MainPage/main.jpg" },
  { id: 4, url: "/MainPage/Rococo stool.jpg" },
];

export default function HomePage(props) {
  const [isToggle, setToggle] = useState(false);
  const fadeIn = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: config.molasses,
  });
  props.setPrevious(0);

  return (
    <motion.div
      exit={{ x: "-15" }}
      style={{ height: "100%" }}
      transition={{ type: "spring" }}
    >
      <div className="big">
        <Head>
          <title>Marvin Lee</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="container">
          <div className="left">
            <Gallery list={carousel} />
          </div>
          <div className="right">
            <h1
              onClick={() => {
                setToggle(!isToggle);
              }}
              className="myName"
              style={fadeIn}
            >
              Marvin Lee
            </h1>
            <div className="menu">
              <Menu list={hats} isToggle={isToggle} />
            </div>
          </div>
        </section>
        <style>
          {`
            .container {
              height: 100%;
              display: flex;
            }
            .left {
              position: relative;
              height: 100%;
              width: 50%;

              background-clip: content-box;
            }
            .right {
              position: relative;
              height: 100%;
              width: 50%;
              background: #d43109;
            }
            .myName {
              font-family: Helvetica Neue;
              color: black;
              position: absolute;
              top: 50%;
              left: 1rem;
              cursor: pointer;
            }
            .big {
              height: 100%;
            }
            .menu {
              position: absolute;
              top: 55%;
              left: 1rem;
              cursor: pointer;
            }
            .menuItems {
              cursor: pointer;
              font-size: 1em;
            }
          `}
        </style>
      </div>
    </motion.div>
  );
}
