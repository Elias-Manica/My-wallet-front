import { useNavigate } from "react-router-dom";

import { useContext } from "react";

import TokenAuth from "../contexts/tokenContext";

import { View, Button } from "./styles";

export default function PrivatePage({ children }) {
  const auth = JSON.parse(localStorage.getItem("mywallet"));
  const { token } = useContext(TokenAuth);

  const navigate = useNavigate();

  if (auth.token === token) {
    return <>{children}</>;
  } else {
    return (
      <View>
        <h1>Você foi desconectado, faça login novamente</h1>
        <Button onClick={() => navigate("/")}>Clique aqui</Button>
      </View>
    );
  }
}
