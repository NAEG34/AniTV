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
`;

export const Results = styled.div`
  h1 {
    margin: 15px 0;
  }
  span {
    font-weight: 900;
  }
`;
