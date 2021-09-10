import { useEffect, useState } from "react";
import styled from "styled-components";
import { Main } from "../Payment/utils/PaymentWrapper";
import Event  from "./utils/Event";
import useApi from "../../hooks/useApi";
import Day from "./utils/Day";

export default function ScheduleActivities() {
  const { activity } = useApi();
  const [days, setDays] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    activity.getAllDates().then((res) => {
      setDays(res.data);
    });
  }, []);
  
  return (
    <Main>
      <h1>Escolha de atividades</h1>
      <Days>
        {
          days?.map((day, i) => <Day key={i} day = {day} setActivities={setActivities}/>)
        }
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
