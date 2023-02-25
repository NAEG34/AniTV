import styled from "styled-components";
import defaultImg from "../assets/default.jfif";

export const Container = styled.div`
  user-select: none;
  padding: 30px 6% 30px 6%;
  width: 100%;
  color: white;
  padding-top: 120px;

  h1 {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 10px;
    text-transform: uppercase;
  }
`;

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, max-content));
  grid-gap: 10px;
  justify-content: center;
  padding: initial;
`;

export const ListItem = styled.div``;

export const SliderContainer = styled.div`
  width: 100%;
  margin: 20px 0 30px 0px;
`;

export const SliderItem = styled.li`
  margin-right: 10px;
  max-width: 100%;

  @media screen and (max-width: 600px) {
    margin-right: 10px;
  }
`;

export const SliderCardMini = styled.div`
  width: 180px;
  height: 125px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 1px 5px black;
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

  &:hover {
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.2s linear, background 0.2s linear, color 0.2s linear;
    filter: brightness(0.8);
  }

  @media screen and (max-width: 600px) {
    & {
      width: 150px;
      height: 80px;
    }
  }
`;

export const SliderCard = styled.div`
  max-width: 200px;
  width: 140px;
  height: 280px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 1px 5px black;
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
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.2s linear, background 0.2s linear, color 0.2s linear;
    background: rgba(0, 0, 0, 0.3);
    opacity: 1;
  }
  @media screen and (max-width: 600px) {
    & {
      width: 150px;
      height: 120px;
    }
  }
`;

export const SliderCardText = styled.span`
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
`;
