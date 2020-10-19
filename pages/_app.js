import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const pageTransition = { stiffness: 70, damping: 20, duration: 1 };

function MyApp({ Component, pageProps, router, isVisible }) {
  const [previous, setPrevious] = useState(0);
  return (
    <AnimatePresence>
      <motion.div key={router.route}>
        <Component
          {...pageProps}
          previous={previous}
          setPrevious={setPrevious}
          pageTransition={pageTransition}
        />
      </motion.div>
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
