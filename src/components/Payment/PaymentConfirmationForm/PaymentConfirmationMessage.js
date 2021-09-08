import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentConfirmationMessage() {
  return (
    <MessageHolder>
      <ConfirmationIcon />
      <ConfirmationText>
        <strong>Pagamento confirmado!</strong>
        <p>Prossiga para escolha de hospedagem e atividades</p>
      </ConfirmationText>
    </MessageHolder>
  );
}

const MessageHolder = styled.div`
  display: flex;
`;

const ConfirmationIcon = styled(FaCheckCircle)`
  color: #36b853;
  width: 40px;
  height: 40px;
`;

const ConfirmationText = styled.p`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
