import { useState } from "react";
import styled from "styled-components";
import { Main } from "../Payment/utils/PaymentWrapper";
import Event  from "./utils/Event";

export default function ScheduleActivities() {
  // const [days, setDays] = useState([]);
  return (
    <Main>
      <h1>Escolha de atividades</h1>
      <Days>
        <Day>Sexta, 22/10</Day>
      </Days>
      <Events>
        <div>
          <h1>Auditório Principal</h1>
          <Place>
            <Event />
          </Place>
        </div>
        <div>
          <h1>Auditório Lateral</h1>
          <Place>
          </Place>
        </div>
        <div>
          <h1>Sala de Workshop</h1>
          <Place>
          </Place>
        </div>

      </Events>
    </Main>
  );
}

const Days = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Day = styled.button`
  border: none;
  width: 131px;
  height: 37px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  background-color: #E0E0E0;
  font-size: 14px;
`;

const Events = styled.div`
  display: flex;
  h1 {
    font-size: 17px;
    color: #7B7B7B;
    text-align: center;
    padding-bottom: 7px;
  }

  `;

const Place = styled.div`
  border: 1px solid #D7D7D7;
  width: 288px;
  height: 391px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
