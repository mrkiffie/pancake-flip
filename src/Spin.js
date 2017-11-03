import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
      transform: rotate(180deg);
    }
    5% {
      transform: rotate(180deg);
    }
    95% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
`;

export const Spin = styled.div`
  ${props => (props.animating ? `animation: ${spin} .5s;` : "")};
  will-change: transform;
`;
