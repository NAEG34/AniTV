import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px 6% 0 6%;
  color: white;
`;

export const Episode = styled.div`
  width: 100%;
`;

export const VideoWrapper = styled.div`
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    text-align: center;
    padding: 15px 0;
    text-transform: uppercase;
    letter-spacing: 10px;
    font-weight: 800;
    font-size: 1rem;
  }

  div video {
    width: 80%;
  }

  div svg {
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    fill: white;
    padding: 10px;
    width: 60px;
    background-color: #fe4848;
  }
`;
