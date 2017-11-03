import styled from "styled-components";

export const Pancake = styled.div`
  margin: 1px auto;
  height: 5vmin;
  border-radius: 5vmin;
  display: flex;
  border: 1vmin solid transparent;
  ${props => `background: ${props.color}`};
  ${props => `width: ${25 + 5 * props.size}vmin`};
`;
