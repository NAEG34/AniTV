import styled from "styled-components";
import defaultImg from "../../assets/default.jfif";

export const Container = styled.div`
  padding: 30px 6% 0 6%;
  width: 100%;
  color: white;

  h1 {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 10px;
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
export const SliderCard = styled.div`
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
export const Page = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const PageItem = styled.div`
  /* margin: 20px 0 0 20px; */
  max-width: 100%;
`;
export const PageCard = styled.div`
  margin: 0 15px 15px 0;
  width: 180px;
  height: 180px;
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
    height: 70%;
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
