import React from "react";
import { Spin } from "./Spin";
import { Jump } from "./Jump";

export const Flip = ({ children, animating }) => (
  <Jump animating={animating}>
    <Spin animating={animating}>{children}</Spin>
  </Jump>
);
