import styled from "styled-components";

export default function UnauthorizedToChooseTickets() {
  return (
    <Message>
      <h1>
        Você precisa completar sua inscrição antes de fazer a escolha de
        atividades
      </h1>
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
