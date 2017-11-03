import styled, { keyframes } from "styled-components";

const jump = keyframes`
  45% {
    transform: translateY(-30vmin);
  }
`;

export const Jump = styled.div`
  will-change: transform;
  ${props => (props.animating ? `animation: ${jump} .5s;` : "")};
`;
