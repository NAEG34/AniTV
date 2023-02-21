import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(15, 15, 19, 1) 10%,
    rgba(9, 9, 121, 0) 80%,
    rgba(29, 29, 37, 0) 100%
  );
  /* .navbar-active {
    background-color: #1b1b1b;
  }
  .navbar {
    background: linear-gradient(
      180deg,
      rgba(15, 15, 19, 1) 10%,
      rgba(9, 9, 121, 0) 80%,
      rgba(29, 29, 37, 0) 100%
    );
  } */

  .active {
    color: #fe4848;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const Container = styled.div`
  padding: 0 6%;
  display: flex;
  align-items: center;
  height: 100px;

  img {
    max-height: 25px;
  }

  ul {
    list-style: none;
    display: flex;
  }
  li {
    padding-left: 80px;
  }
  li a {
    color: #a8a8a8;
  }
  li a:hover {
    color: #fff;
  }
  a svg {
    height: 30px;
    width: auto;
    fill: #fff;
  }

  .searchBtn {
    margin: 0 40px;
    margin-left: auto;
  }
  .searchBtn-active {
    margin: 0 40px;
    margin-left: auto;
  }

  .searchBtn-active svg {
    fill: #fe4848;
  }
  .searchBtn svg:hover {
    fill: #fe4848;
  }
`;
