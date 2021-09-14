import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";

import AuthLayout from "../../layouts/Auth";

import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { Row, Title, Label } from "../../components/Auth";
import Link from "../../components/Link";

import EventInfoContext from "../../contexts/EventInfoContext";

import useApi from "../../hooks/useApi";

export default function Redefine() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loadingEnroll, setLoadingEnroll] = useState(false);

  const { token } = useParams();
  const history = useHistory();

  const api = useApi();

  const { eventInfo } = useContext(EventInfoContext);

  function submit(event) {
    event.preventDefault();
    setLoadingEnroll(true);

    if (password !== confirmPassword) {
      toast("As senhas devem ser iguais!");
    } else {
      api.user
        .newPassword(token, password)
        .then((response) => {
          toast("Senha redefinida! Por favor, faça login.");
          history.push("/sign-in");
        })
        .catch((error) => {
          if (error.response) {
            toast("Tente novamente mais tarde!");
          } else {
            toast("Não foi possível conectar ao servidor!");
          }
        })
        .then(() => {
          setLoadingEnroll(false);
        });
    }
  }

  return (
    <AuthLayout background={eventInfo.backgroundImage}>
      <Row>
        <img src={eventInfo.logoImage} alt="Event Logo" />
        <Title>{eventInfo.eventTitle}</Title>
      </Row>
      <Row>
        <Label>Nova senha</Label>
        <form onSubmit={submit}>
          <Input
            label="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Repita sua senha"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            fullWidth
            disabled={loadingEnroll}
          >
            Redefina
          </Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-in">Já está inscrito? Faça login</Link>
      </Row>
    </AuthLayout>
  );
}
