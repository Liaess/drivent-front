import styled from "styled-components";

export default function UnathourizedToChoose() {
  return (
    <Message>
      <h1>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</h1>
    </Message>
  );
}

const Message = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    h1 {
        color: #8E8E8E;
        width: 411px;
        font-size: 20px;
    }
`;
