import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import Artist from "./Artist/Artist";
import Programmer from "./Programmer/Programmer";
import Designer from "./Designer/Designer";
import { useTransition, animated } from "react-spring";

export default function Home(props) {
  return (
    <HomePage
      previous={props.previous}
      setPrevious={props.setPrevious}
      pageTransition={props.pageTransition}
    />
  );
}
