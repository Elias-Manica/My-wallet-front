import React from "react";

import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import { Container, Tittle, InputContainer, Button, Text } from "./styles";

export default function SingUpScreen() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPass, setConfirmPass] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  return (
    <Container>
      <Tittle>My wallet</Tittle>
      <InputContainer
        placeholder="Nome"
        disabled={loading ? true : false}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        color={loading ? "#F2F2F2" : "#FFFFFF"}
      />
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
      <InputContainer
        placeholder="Confirme a senha"
        disabled={loading ? true : false}
        type={"password"}
        value={confirmPass}
        onChange={(e) => setConfirmPass(e.target.value)}
        required
        color={loading ? "#F2F2F2" : "#FFFFF"}
      />
      <Button>
        {loading ? (
          <ThreeDots color="white" height={40} width={40} />
        ) : (
          "Entrar"
        )}
      </Button>
      <Text
        onClick={() => {
          navigate("/");
        }}
      >
        Já tem uma conta? Entre agora!
      </Text>
    </Container>
  );
}
