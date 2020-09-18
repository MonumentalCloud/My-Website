import { Spring, config } from "react-spring/renderprops.cjs";
import React, { useState } from "react";
import Link from "next/link";

import { useSpring, animated } from "react-spring";

/**export default function MenuItem(props) {
  const [hover, setHover] = useState(false);
  const bolden = useSpring({
    fontWeight: hover ? "700" : "300",
    config: config.stiff,
  });
  const router = useRouter();

  return (
    <animated.div
      onMouseEnter={() => {
        setHover(!hover);
        console.log(hover);
      }}
      onMouseLeave={() => setHover(!hover)}
      style={{ cursor: "pointer", ...bolden }}
    >
      {props.text}
    </animated.div>
  );
}**/

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
    };
    this.hoverHandler = this.hoverHandler.bind(this);
  }

  hoverHandler() {
    this.setState({
      isHover: !this.state.isHover,
    });
  }
  render() {
    return (
      <Spring
        to={{
          fontWeight: this.state.isHover ? "700" : "300",
        }}
        config={config.stiff}
      >
        {(props) => (
          <Link href={this.props.destination}>
            <animated.div
              onMouseEnter={this.hoverHandler}
              onMouseLeave={this.hoverHandler}
              style={{ ...this.props.style, ...props, cursor: "pointer" }}
            >
              {this.props.text}
            </animated.div>
          </Link>
        )}
      </Spring>
    );
  }
}
