import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #8c11be;
  height: 100vh;
  flex-direction: column;
`;

export const NameUser = styled.h1`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  /* identical to box height */

  color: #ffffff;
`;

export const Header = styled.div`
  height: 10%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Icon = styled.div`
  color: white;
  font-size: 30px;
`;

export const BoxHistoryEmpty = styled.div`
  height: 68%;
  width: 90%;
  background: #ffffff;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    width: 80%;
    color: #868686;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.button`
  height: 114px;
  width: 48%;
  background: #a328d6;
  border-radius: 5px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  cursor: pointer;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  ion-icon {
    align-items: center;
    margin-top: 10px;
    margin-bottom: 35px;
  }
  p {
    justify-content: flex-end;
    width: 30px;
  }
`;
