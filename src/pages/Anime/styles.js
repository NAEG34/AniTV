import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px 6% 0 6%;
  color: white;
`;

export const AnimeData = styled.div`
  display: flex;
  width: 100%;
`;

export const AnimeImage = styled.div`
  width: 180px;
  img {
    /* height: 100%; */
    width: 100%;
    height: 100%;
    border-radius: 5px;
    filter: contrast(1.2) saturate(1.2);
  }
`;

export const AnimeInfo = styled.div`
  width: 100%;

  padding: 0 20px;
  h1 {
    text-transform: uppercase;
    font-size: 25px;
    text-align: center;
    font-weight: 800;
  }
  div {
    padding: 10px 0;
  }
`;

export const AFooter = styled.footer`
  padding: 10px 0;

  span {
    font-weight: 800;
  }
  p + p {
    margin-top: 5px;
  }
`;
export const EpisodeContainer = styled.div`
  user-select: none;

  #revert-icon-div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 22px;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
  }

  svg {
    cursor: pointer;
    fill: #fff;
  }
  svg:hover {
    fill: #fe4848;
  }
  .rotate {
    transform: rotate(180deg);
  }
`;
export const AnimeEpisodes = styled.div`
  width: 100%;
`;

export const Episode = styled.div`
  text-align: center;
  margin-top: 15px;
  line-height: 50px;

  border-radius: 5px;
  background-color: #393939;

  &:hover {
    cursor: pointer;
    background-color: #fe4848;
  }
`;
