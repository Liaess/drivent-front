import { useState, useContext } from "react";

import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Link from "../../components/Link";
import { Row, Title, Label } from "../../components/Auth";
import { toast } from "react-toastify";

import useApi from "../../hooks/useApi";
import EventInfoContext from "../../contexts/EventInfoContext";

export default function ForgotThePassword({ setForget }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { eventInfo } = useContext(EventInfoContext);

  const api = useApi();

  function submit(e) {
    e.preventDefault();

    setLoading(true);
    api.user
      .redefine(email)
      .then(() => {
        toast("Acesse seu email para redefinir a senha!");
        setLoading(false);
      })
      .catch(() => {
        toast("Aconteceu um imprevisto, tente novamente!");
        setLoading(false);
      });
  }

  return (
    <>
      <Row>
        <img src={eventInfo.logoImage} alt="Event Logo" />
        <Title>{eventInfo.eventTitle}</Title>
      </Row>
      <Row>
        <Label>Recuperar a senha</Label>
        <form onSubmit={submit}>
          <Input
            label="E-mail"
            type="text"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" color="primary" fullWidth disabled={loading}>
            Recupere a senha
          </Button>
        </form>
      </Row>
      <Row>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setForget(false);
          }}
        >
          Lembrei minha senha
        </div>
      </Row>
      <Row>
        <Link to="/enroll">Não possui login? Inscreva-se</Link>
      </Row>
    </>
  );
}
