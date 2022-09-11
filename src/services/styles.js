import styled from "styled-components";

export const View = styled.div`
  min-height: 100vh;
  background-color: #8c11be;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    /* identical to box height */
    text-align: center;
    color: #ffffff;
  }
`;

export const Button = styled.button`
  height: 60px;
  width: 50%;
  margin-top: 2%;
  background: #a328d6;
  border-radius: 5px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  cursor: pointer;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
