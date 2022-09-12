import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #8c11be;
  height: 100vh;
  flex-direction: column;
`;

export const NameUserContainer = styled.h1`
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
  cursor: pointer;
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

export const BoxHistoryDontEmpty = styled.div`
  height: 68%;
  width: 90%;
  background: #ffffff;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  position: relative;
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

export const TextBank = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
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

export const TextDescription = styled.h6`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
  width: 50%;
`;

export const DateText = styled.h6`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-right: 8px;
  color: #c6c6c6;
`;

export const DeposityText = styled.h6`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-justify: inter-word;
  color: #c70000;
  margin-right: 15px;
`;

export const WithdrawText = styled.h6`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-right: 15px;
  color: #03ac00;
`;

export const TittleDescription = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BalanceContainer = styled.div`
  height: 30px;
  width: 90%;

  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 31px;
    color: #ffffff;
    margin-left: 5.5%;
    margin-right: 20px;
    display: flex;
    align-items: center;
  }
  h2 {
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

export const ShowBalance = styled.div`
  display: flex;
  align-items: center;
`;

export const ShowIcon = styled.div`
  color: white;
  font-size: 20px;
`;

export const HiddenBalance = styled.div`
  width: 70px;
  height: 15px;
  background-color: #c6c6c6;
  margin-left: 10px;
  border-radius: 5px;
`;

export const DivValues = styled.div`
  display: flex;

  align-items: center;
`;

export const IconDelete = styled.div`
  cursor: pointer;
`;
