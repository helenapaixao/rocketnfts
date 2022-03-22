import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    line-height: 22px;
    font-size: 18px;
    margin-left: 10px;
    margin-top: 57px;
    transition: color 0.2s;
    &:hover {
      color: #fff;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h1 {
    font-size: 30px;
  }
`;

export const Title = styled.h1`
  color: #ffff;
  font-weight: bold;
  font-size: 40px;
  margin-left: 80px;
  margin-top: 57px;
`;

export const TitleSecond = styled.h1`
  color: #ff5b50;
  font-weight: bold;
  font-size: 40px;
  margin-left: 10px;
  margin-top: 57px;
`;

export const Img = styled.image`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #ffff;
  display: flex;
  flex-direction: row;

  h4 {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    word-break: break-all;
    width: 401px;
    height: 88px;
    margin-top: 90px;
    margin-left: 82px;
  }

  h1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 61px;
    width: 596px;
    height: 246px;
    margin-top: 90px;
    margin-left: 82px;
    color: #ffffff;
  }
`;
