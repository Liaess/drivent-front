import styled from "styled-components";
import Icon from "./Icon";

export default function Event() {
  return(
    <EventDiv>
      <InfoEvent>
        <strong>Nome do Evento</strong>
        <p>Hora do Evento</p>
      </InfoEvent>
      <Icon status={"COLOCAR AQUI"} />
    </EventDiv>
  );
}

const EventDiv = styled.div`
  border-radius: 5px;
  width: 265px;
  background-color: #F1F1F1;
  height: 80px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #343434
  font-size: 12px;
`;

const InfoEvent = styled.div`
  margin-left: 10px;
`;
