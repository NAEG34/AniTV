import styled from "styled-components";

export const color = {
  noScroll: `linear-gradient(
    180deg,
    rgba(15, 15, 19, 1) 10%,
    rgba(9, 9, 121, 0) 80%,
    rgba(29, 29, 37, 0) 100%
  )`,
  scroll: "#1a1a1a",
};

export const Header = styled.header`
  user-select: none;
  position: fixed;
  z-index: 999;
  padding: 0 6%;
  width: 100%;
`;

export const Footer = styled.footer`
  padding: 0 6%;
  width: 100%;
  background-color: #1a1a1a;
  bottom: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80px;
  }
  a {
    display: flex;
    align-items: center;
    margin-top: 5px;
    color: #fe4848;

    h2 {
      font-size: 15px;
      letter-spacing: 2px;
    }
    svg {
      width: 15px;
      margin-right: 5px;
    }
  }
  span {
    color: #fe4848;
  }
  h4 {
    font-weight: 500;
    color: white;
    font-size: 10px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100px;

  img {
    max-height: 25px;
  }

  .navbar-links {
    width: 100%;
    list-style: none;
    display: flex;
  }

  .navbar-links li {
    margin-left: 7%;
  }

  .navbar-links li a {
    color: #a8a8a8;
  }

  .navbar-links li a:hover {
    color: #fff;
  }

  .search-btn {
    display: block;
    height: 35px;
    width: 35px;
    fill: #fe4848;
  }

  .search-btn:hover {
    fill: #fe4848;
  }

  .topBar {
    width: 30px;
    height: 24px;
    cursor: pointer;
    z-index: 600;
    display: none;
  }

  .topBar:hover > div {
    background: #fe4848;
  }

  .topBar div {
    width: 30px;
    height: 4px;
    background: #fff;
  }

  .topBar div + div {
    margin-top: 6px;
  }

  .miniMenu {
    list-style: none;
    position: fixed;
    width: 100%;
    padding: 100px 0;
    left: 0;
    right: 0;
    top: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(15, 15, 19, 0.9) 100%,
      rgba(9, 9, 121, 0) 200%,
      rgba(29, 29, 37, 1) 100%
    );
    z-index: 500;
    overflow-x: hidden;
    overflow-y: auto;
    opacity: 0;
    visibility: hidden;
  }

  .miniMenu li {
    cursor: pointer;
    text-align: center;
    line-height: 10vh;
  }

  .miniMenu li:hover {
    background-color: #fe4848;
  }

  .miniMenu a {
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  @media screen and (max-width: 600px) {
    .navbar-links {
      display: none;
    }

    .active {
      display: block;
      top: 0;
      opacity: 1;
      visibility: visible;
    }

    .topBar {
      margin-left: auto;
      display: block;
    }
    .search-btn {
      display: none;
    }
  }
`;
