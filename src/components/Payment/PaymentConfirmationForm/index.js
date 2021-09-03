import styled from "styled-components";
import { useState } from "react";
import { Main, Option, Finish } from "../utils/PaymentWrapper";
import CreditCardForm from "./CreditCardForm";

export default function PaymentConfirmationForm() {
  const [canSubmit, SetCanSubmit] = useState(false);

  return (
    <Main>
      <div>
        <h1>Ingresso e pagamento</h1>
        <h2>Ingresso escolhido</h2>

        <Summary>
          <p>Presencial + Com Hotel</p>
          <span>R$ 600</span>
        </Summary>

        <h2>Ingresso escolhido</h2>
        <CreditCardForm />
        <Finish disabled={canSubmit}>FINALIZAR PAGAMENTO</Finish>
      </div>
    </Main>
  );
}

const Summary = styled(Option)`
  background-color: #ffeed2;
  width: 300px;
  height: 100px;
`;
