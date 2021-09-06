import styled from "styled-components";
import { useContext } from "react";
import TicketContext from "../../../contexts/TicketContext";
import { Main, Option } from "../utils/PaymentWrapper";
import CreditCardForm from "./CreditCardForm";
import PaymentConfirmationMessage from "./PaymentConfirmationMessage";
import useApi from "../../../hooks/useApi";

export default function PaymentConfirmationForm() {
  const { ticketData, setTicketData } = useContext(TicketContext);
  const { ticket } = useApi();

  return (
    <Main>
      <div>
        <h1>Ingresso e pagamento</h1>
        <h2>Ingresso escolhido</h2>
        <Summary>
          <p>{`${ticketData.isOnline ? "Online" : "Presencial"} + ${
            ticketData.hasHotelReservation ? "Com Hotel" : "Sem Hotel"
          }`}</p>
          <span>
            R$ $
            {`${
              (ticketData.isOnline ? 100 : 250) +
              (ticketData.hasHotelReservation ? 350 : 0)
            }`}
          </span>
        </Summary>
        <h2>Pagamento</h2>
        {ticketData.isPaid ? (
          <PaymentConfirmationMessage />
        ) : (
          <CreditCardForm
            ticket={ticket}
            ticketData={ticketData}
            setTicketData={setTicketData}
          />
        )}
      </div>
    </Main>
  );
}

const Summary = styled(Option)`
  background-color: #ffeed2;
  width: 300px;
  height: 100px;
`;
