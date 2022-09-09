import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8c11be;
  height: 100vh;
  flex-direction: column;
`;

export const Tittle = styled.h1`
  font-family: "Saira Stencil One";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  margin-bottom: 20px;
  color: #ffffff;
`;

export const InputContainer = styled.input`
  height: 60px;
  width: 90%;
  background: #ffffff;
  border-radius: 5px;
  padding-left: 15px;
  margin-left: auto;
  margin-right: auto;
  &::placeholder {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #000000;
  }
  margin-bottom: 10px;
`;

export const Button = styled.button`
  height: 60px;
  width: 90%;
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

export const Text = styled.h2`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  margin-top: 40px;
  cursor: pointer;
  color: #ffffff;
`;

export const Form = styled.form`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
