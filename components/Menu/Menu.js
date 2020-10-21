import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import { useTrail, animated, config } from "react-spring";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Menu(props) {
  const containerTransition = {
    hidden: {
      display: "none",
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
      },
    },
    show: {
      display: "block",
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const transition2 = {
    hidden: { opacity: 0, x: 30 },
    show: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <motion.div
      key="parent"
      variants={containerTransition}
      animate={props.isToggle ? "show" : "hidden"}
    >
      {props.list.map((listitem) => {
        return (
          <Link
            key="child"
            href={`/${listitem}/${listitem}`}
            style={{ borderBottom: "none", color: "black" }}
          >
            <motion.div
              key="child"
              variants={transition2}
              whileHover={{ x: 10 }}
              style={{ fontFamily: "Helvetica" }}
            >
              {listitem}
            </motion.div>
          </Link>
        );
      })}
    </motion.div>
  );
}
