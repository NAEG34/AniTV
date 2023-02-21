import styled from "styled-components";
import defaultImg from "../../assets/default.jfif";

export const Container = styled.div`
  padding: 30px 6% 0 6%;
  width: 100%;
  height: 100vh;
  color: white;

  h1 {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 10px;
  }
`;

export const Latest = styled.section`
  width: 100%;
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
  /* background-color: #fff; */

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
export const LatestItemContainer = styled.div`
  width: 50%;
  display: flex;
  /* flex-wrap: wrap; */
  /* margin: 0 10px; */

  .wrap {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 0 10px;
  }
`;

export const LatestItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  box-shadow: 5px 5px 20px black;

  width: 100%;
  height: 190px;
  margin: 10px;
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

export const SliderContainer = styled.div`
  width: 100%;
  margin: 20px 0 40px 0px;
`;

export const SliderItem = styled.li`
  margin-right: 20px;
  max-width: 100%;
`;

export const SliderCardCat = styled.div`
  width: 180px;
  height: 125px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  background-color: #393939;

  span {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-size: 18px;
    text-shadow: 1px 1px 2px black;
  }

  span:hover {
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.2s linear, background 0.2s linear, color 0.2s linear;
    background: rgba(0, 0, 0, 0.3);
    opacity: 1;
  }
`;

export const SliderCardPop = styled.div`
  width: 180px;
  height: 325px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  background: ${(props) =>
    props.bgURL ? `url(${props.bgURL})` : `url(${defaultImg})`};
  background-color: rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-position: center;

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
  span {
    height: 30%;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    padding: 10px;
    opacity: 0;
    font-size: 18px;
    text-shadow: 1px 1px 2px black;
  }

  span:hover {
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.2s linear, background 0.2s linear, color 0.2s linear;
    background: rgba(0, 0, 0, 0.3);
    opacity: 1;
  }
`;
