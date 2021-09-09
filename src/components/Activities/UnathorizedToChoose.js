import styled from "styled-components";
import { useContext } from "react";
import TicketContext from "../../contexts/TicketContext";

export default function UnathorizedToChoose() {
  const { ticketData } = useContext(TicketContext);

  // eslint-disable-next-line no-console
  console.log(ticketData);

  return (
    <Message>
      {ticketData.isOnline ? (
        <h1>
          Sua modalidade de ingresso não necessita escolher atividade. Você terá
          acesso a todas as atividades.
        </h1>
      ) : (
        <h1>
          Você precisa ter confirmado pagamento antes de fazer a escolha de
          atividades
        </h1>
      )}
    </Message>
  );
}

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  h1 {
    color: #8e8e8e;
    width: 510px;
    font-size: 20px;
    text-align: center;
  }
`;
