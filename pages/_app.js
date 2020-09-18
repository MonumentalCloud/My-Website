import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const pageTransition = { stiffness: 70, damping: 20, duration: 1 };

function MyApp({ Component, pageProps, router }) {
  const [previous, setPrevious] = useState(0);
  return (
    <AnimatePresence exitBeforeEnter>
      <Component
        key={router.route}
        style={{ height: "100%" }}
        {...pageProps}
        previous={previous}
        setPrevious={setPrevious}
        pageTransition={pageTransition}
      />
      ;
    </AnimatePresence>
  );
}

/**class MyApp extends App {
  constructor(props) {
    
  }
  state = { previous: "/" };
  setPrevious(path) {
    setState(path);
  }
  render() {
    const { Component, PageProps, router } = this.props;
    return (
      <AnimatePresence exitBeforeEnter>
        <Component
          {...PageProps}
          key={router.route}
          previous={this.state.previous}
          setPrevious={this.setPrevious}
        />
      </AnimatePresence>
    );
  }
}**/

export default MyApp;
