import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./LoginScreen/LoginScreen";
import SingUpScreen from "./SingUpScreen/SingUpScreen";
import { GlobalStyle } from "../assets/css/GlobalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/cadastro" element={<SingUpScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
