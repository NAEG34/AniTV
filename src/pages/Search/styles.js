import styled from "styled-components";

export const SearchBox = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  input,
  button {
    height: 50px;
    border: none;
    border-radius: 10px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
  }
  input {
    width: 85%;
  }
  button {
    background-color: #fe4848;
    color: white;
    width: 12%;
  }
  .searchBtn-image {
    display: none;
  }
  @media screen and (max-width: 600px) {
    button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button span {
      display: none;
    }
    .searchBtn-image {
      display: block;
      fill: white;
      /* width: 30px; */
      height: 30px;
    }
  }
`;

export const Results = styled.div`
  h1 {
    margin: 15px 0;
  }
  span {
    font-weight: 900;
  }

  @media screen and (max-width: 600px) {
    div > div {
      max-width: 23.7vw;
      min-height: 140px;
    }
  }
`;
