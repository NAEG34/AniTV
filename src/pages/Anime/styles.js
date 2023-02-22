import styled from "styled-components";

export const AnimeData = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;

    & > div {
      margin-top: 20px;
      text-align: center;
    }
  }
`;

export const AnimeImage = styled.div`
  width: 200px;
  img {
    display: block;
    width: 100%;
    height: auto;
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
  /* border: 1px solid red; */
  user-select: none;

  #revert-icon-div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  h1 {
    line-height: 40px;
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
