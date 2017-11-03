import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  overflow: hidden;
  margin: 10px;
  padding: 12px 12px;
  cursor: pointer;
  user-select: none;
  transition: all 60ms ease-in-out;
  text-align: center;
  white-space: nowrap;
  background: #161616;
  color: #fff;
  border: 0 none;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
  appearance: none;
  align-items: center;
  box-shadow: 2px 5px 10px rgba(22, 22, 22, 0.1);
}
&:hover {
  transition: opacity 60ms ease;
  opacity: .85;
}
&:active {
  transition: opacity 60ms ease;
  opacity: .75;
}
&:focus {
  outline: 1px dotted #959595;
  outline-offset: -4px;
}
`;
