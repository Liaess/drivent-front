import styled from "styled-components";
import EventInfoContext from "../../../contexts/EventInfoContext";
import { useContext } from "react";

export default function Certificate() {
  const { eventInfo } = useContext(EventInfoContext);

  const today = new Date(Date.now());
  const endDate = new Date(eventInfo.endDate);
  return (
    <Message>
      {endDate > today ? 
        <h1>O certificado só será disponível após o evento</h1> :
        <h1>O certificado ficará disponível em breve!</h1>     
      }
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
