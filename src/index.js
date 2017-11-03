import React, { Component } from "react";
import { render } from "react-dom";

import { Pancake } from "./Pancake";
import { Flip } from "./Flip";
import { Button } from "./Button";
import { shuffleArray, whichAnimationEvent } from "./utils";

const animationName = whichAnimationEvent();

const range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class App extends Component {
  constructor() {
    super();
    const data = shuffleArray(range);
    this.state = {
      data,
      top: [],
      bottom: data,
      counter: 0
    };
  }

  componentDidMount() {
    this.node.addEventListener(animationName, this.animationEnd);
  }

  componentDidUpdate() {
    this.node.addEventListener(animationName, this.animationEnd);
  }

  componentWillUnmount() {
    this.node.removeEventListener(animationName, this.animationEnd);
  }

  animationEnd = () => {
    if (this.state.animating) {
      this.setState({
        animating: false
      });
    }
  };

  ref = node => (this.node = node);

  randomize = event => {
    event.preventDefault();

    const data = shuffleArray(range);
    this.setState({
      data,
      top: [],
      bottom: data,
      counter: 0
    });
  };

  flip = index => {
    if (this.state.animating) {
      return;
    }

    const data = this.state.data;
    const top = data.slice(0, index + 1).reverse();
    const bottom = data.slice(index + 1);

    this.setState({
      animating: true,
      data: [...top, ...bottom],
      top,
      bottom,
      counter: this.state.counter + 1
    });
  };

  render() {
    const { data, top, bottom, counter, animating } = this.state;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          textAlign: "center"
        }}
      >
        <div ref={this.ref}>
          <Flip animating={animating}>
            {top.map((size, index) => (
              <Pancake
                key={index}
                onClick={() => this.flip(index)}
                size={size}
                color={`hsla(${360 / data.length * size}, 80%, 50%, .85)`}
              />
            ))}
          </Flip>
          {bottom.map((size, index) => (
            <Pancake
              key={index}
              onClick={() => this.flip(index + top.length)}
              size={size}
              color={`hsla(${360 / data.length * size}, 80%, 50%, .85)`}
            />
          ))}
        </div>

        {counter}

        <Button onClick={this.randomize}>Randomize</Button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
