import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import TokenAuth from "../contexts/tokenContext";
import NameAuth from "../contexts/nameContext";
import ValueAuth from "../contexts/valueTransitionEdit";
import DescriptionAuth from "../contexts/descriptionTransitionEdit";
import IdAuth from "../contexts/idTransitionEdit";

import PrivatePage from "../services/privatePage";

import LoginScreen from "./LoginScreen/LoginScreen";
import SingUpScreen from "./SingUpScreen/SingUpScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import NewDeposityScreen from "./NewDeposityScreen/NewDeposityScreen";
import WithdrawScreen from "./WithdrawScreen/WithdrawScreen";
import DeposityScreenEdit from "./DeposityScreenEdit/DeposityScreenEdit";
import WithdrawScreenEdit from "./WithdrawScreenEdit/WithdrawScreen";

import { GlobalStyle } from "../assets/css/GlobalStyle";

export default function App() {
  const [token, setToken] = React.useState("");
  const [nameUser, setNameUser] = React.useState("");
  const [valueEdit, setValueEdit] = React.useState("");
  const [descriptionEdit, setDescriptionEdit] = React.useState("");
  const [idEdit, setIdEdit] = React.useState("");

  return (
    <>
      <TokenAuth.Provider value={{ token, setToken }}>
        <NameAuth.Provider value={{ nameUser, setNameUser }}>
          <ValueAuth.Provider value={{ valueEdit, setValueEdit }}>
            <DescriptionAuth.Provider
              value={{ descriptionEdit, setDescriptionEdit }}
            >
              <IdAuth.Provider value={{ idEdit, setIdEdit }}>
                <GlobalStyle />
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<LoginScreen />} />
                    <Route path="/cadastro" element={<SingUpScreen />} />
                    <Route
                      path="/home"
                      element={
                        <PrivatePage>
                          <HomeScreen />
                        </PrivatePage>
                      }
                    />
                    <Route
                      path="/deposito"
                      element={
                        <PrivatePage>
                          <NewDeposityScreen />
                        </PrivatePage>
                      }
                    />
                    <Route
                      path="/editar-deposito"
                      element={
                        <PrivatePage>
                          <DeposityScreenEdit />
                        </PrivatePage>
                      }
                    />
                    <Route
                      path="/saque"
                      element={
                        <PrivatePage>
                          <WithdrawScreen />
                        </PrivatePage>
                      }
                    />
                    <Route
                      path="/editar-saque"
                      element={
                        <PrivatePage>
                          <WithdrawScreenEdit />
                        </PrivatePage>
                      }
                    />
                  </Routes>
                </BrowserRouter>
              </IdAuth.Provider>
            </DescriptionAuth.Provider>
          </ValueAuth.Provider>
        </NameAuth.Provider>
      </TokenAuth.Provider>
    </>
  );
}
