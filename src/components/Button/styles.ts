import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
  background: #ffff;
  color: #000;
  border: 0;
  padding: 16px;
  height: 50px;
  width: 230px;
  font-weight: 700;
  margin-top: 16px;
  font-family: "Montserrat", sans-serif;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, "#FFFFFF")};
  }
`;
