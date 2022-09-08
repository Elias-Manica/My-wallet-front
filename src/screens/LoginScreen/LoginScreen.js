import React from "react";

import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import { Container, Tittle, InputContainer, Button, Text } from "./styles";

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  return (
    <Container>
      <Tittle>My wallet</Tittle>
      <InputContainer
        placeholder="E-mail"
        disabled={loading ? true : false}
        type={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        color={loading ? "#F2F2F2" : "#FFFFFF"}
      />
      <InputContainer
        placeholder="Senha"
        disabled={loading ? true : false}
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        color={loading ? "#F2F2F2" : "#FFFFF"}
      />
      <Button
        onClick={() => {
          navigate("/home");
        }}
      >
        {loading ? (
          <ThreeDots color="white" height={40} width={40} />
        ) : (
          "Entrar"
        )}
      </Button>
      <Text
        onClick={() => {
          navigate("/cadastro");
        }}
      >
        Primeira vez? Cadastre-se!
      </Text>
    </Container>
  );
}
