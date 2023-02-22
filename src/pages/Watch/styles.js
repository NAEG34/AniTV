import styled from "styled-components";

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

  @media screen and (max-width: 600px) {
    div {
      flex-direction: column;
    }
    div > svg,
    video {
      margin: 20px 0;
    }
  }
`;
