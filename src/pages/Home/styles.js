import styled from "styled-components";
import defaultImg from "../../assets/default.jfif";

export const Latest = styled.section`
  @media screen and (max-width: 600px) {
    & {
      margin-bottom: 50px;
    }
  }
`;

export const SeeMore = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;
  justify-content: flex-end;

  a {
    border-radius: 5px;
    color: black;
    background-color: white;
    padding: 5px 10px;
  }
  a span {
    font-weight: 900;
    color: #fe4848;
  }
`;

export const LatestContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  @media screen and (max-width: 600px) {
    & {
      display: block;
      margin-bottom: 20px;
    }

    & > div {
      height: 200px;
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

export const LatestMain = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: center;
  box-shadow: 5px 5px 20px black;
  cursor: pointer;
  border-radius: 10px;
  width: 50%;
  height: 400px;
  background: ${(props) =>
    props.bgURL ? `url(${props.bgURL})` : `url(${defaultImg})`};
  background-color: rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-position: center;

  span {
    color: #fe4848;
    width: 100%;
    font-size: 40px;
    font-weight: 900;
    text-shadow: 1px 1px 2px black;
    padding: 20px;
    opacity: 0;
  }
  &:hover {
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.2s linear, background 0.2s linear, color 0.2s linear;
    background-blend-mode: darken;
  }

  &:hover > span {
    background: rgba(0, 0, 0, 0.3);
    opacity: 1;
  }
`;
export const Wrap = styled.div``;
export const LatestItemContainer = styled.div`
  width: 50%;
  height: 400px;
  display: block;

  .wrap {
    width: 100%;
    display: flex;
    margin-bottom: 15px;
    justify-content: space-between;
  }

  @media screen and (max-width: 600px) {
    & {
      width: 100%;
      height: 200px;
    }
    .wrap {
      height: 50%;
      margin-bottom: 10px;
    }

    .wrap div {
      margin: 0;
      height: 95px;
    }
    .wrap div + div {
      margin-left: 10px;
    }
  }
`;

export const LatestItem = styled.div`
  cursor: pointer;
  display: block;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  box-shadow: 5px 5px 20px black;
  width: 50%;
  margin-left: 15px;
  height: 192px;
  border-radius: 10px;
  background: ${(props) =>
    props.bgURL ? `url(${props.bgURL})` : `url(${defaultImg})`};
  background-color: rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-position: center;

  > span {
    /* color: #fe4848; */
    width: 100%;
    font-size: 15px;
    font-weight: 900;
    text-shadow: 1px 1px 2px black;
    padding: 15px;
    opacity: 0;
  }

  &:hover {
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.2s linear, background 0.2s linear, color 0.2s linear;
    background-blend-mode: darken;
  }

  &:hover > span {
    /* transform: translateY(0); */
    background: rgba(0, 0, 0, 0.3);
    opacity: 1;
  }
`;
