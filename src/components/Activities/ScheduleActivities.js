import { useEffect, useState } from "react";
import styled from "styled-components";
import { Main } from "../Payment/utils/PaymentWrapper";
import Event from "./utils/Event";
import useApi from "../../hooks/useApi";
import Day from "./utils/Day";

export default function ScheduleActivities() {
  const { activity } = useApi();
  const [days, setDays] = useState([]);
  const [activities, setActivities] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    activity.getAllDates().then((res) => {
      setDays(res.data);
    });
  }, []);

  return (
    <Main>
      <h1>Escolha de atividades</h1>
      {selectedDay === null && <h2>Primeiro, filtre pelo dia do evento:</h2>}
      <Days>
        {days?.map((day, i) => (
          <Day
            key={i}
            id={i}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            day={day}
            setActivities={setActivities}
          />
        ))}
      </Days>
      {selectedDay !== null && (
        <Events>
          <div>
            <h1>Auditório Principal</h1>
            <Place>
              <Event />
            </Place>
          </div>
          <div>
            <h1>Auditório Lateral</h1>
            <Place></Place>
          </div>
          <div>
            <h1>Sala de Workshop</h1>
            <Place></Place>
          </div>
        </Events>
      )}
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
    color: #7b7b7b;
    text-align: center;
    padding-bottom: 7px;
  }
`;

const Place = styled.div`
  border: 1px solid #d7d7d7;
  width: 288px;
  height: 391px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
