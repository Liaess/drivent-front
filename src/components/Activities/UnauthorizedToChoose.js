import styled from "styled-components";
import { useContext } from "react";
import EnrollmentContext from "../../contexts/EnrollmentContext";
import TicketContext from "../../contexts/TicketContext";

export default function UnauthorizedToChoose() {
  const { enrollmentData } = useContext(EnrollmentContext);
  const { ticketData } = useContext(TicketContext);

  return (
    <Message>
      {!enrollmentData ? (
        <h1>
          Você precisa completar sua inscrição antes de fazer a escolha de
          atividades
        </h1>
      ) : ticketData?.isOnline ? (
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
