import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./LoginScreen/LoginScreen";
import SingUpScreen from "./SingUpScreen/SingUpScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import NewDeposityScreen from "./NewDeposityScreen/NewDeposityScreen";
import WithdrawScreen from "./WithdrawScreen/WithdrawScreen";

import { GlobalStyle } from "../assets/css/GlobalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/cadastro" element={<SingUpScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/deposito" element={<NewDeposityScreen />} />
          <Route path="/saque" element={<WithdrawScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
