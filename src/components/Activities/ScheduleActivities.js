import { useEffect, useState } from "react";
import styled from "styled-components";
import { Main } from "../Payment/utils/PaymentWrapper";
import Events from "./utils/Events";
import useApi from "../../hooks/useApi";
import Day from "./utils/Day";

export default function ScheduleActivities() {
  const { activity } = useApi();
  const [days, setDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [activityFirstLocation, setActivityFirstLocation] = useState([]);
  const [activitySecondLocation, setActivitySecondLocation] = useState([]);
  const [activityThirdLocation, setActivityThirdLocation] = useState([]);
  const [newInterval, setNewInterval] = useState(null);

  useEffect(() => {
    activity.getAllDates().then((res) => {
      setDays(res.data);
    });
  }, []);

  function ChooseDay(day) {
    if(newInterval) clearInterval(newInterval);
    setSelectedDay(day);
    activity.getActivitiesByDate({ date: day }).then((res) => {
      setActivityFirstLocation(res.data.filter(item => item.locationId === 1));
      setActivitySecondLocation(res.data.filter(item => item.locationId === 2));
      setActivityThirdLocation(res.data.filter(item => item.locationId === 3));
    });
    setNewInterval(setInterval(() => {
      activity.getActivitiesByDate({ date: day }).then((res) => {
        setActivityFirstLocation(res.data.filter(item => item.locationId === 1));
        setActivitySecondLocation(res.data.filter(item => item.locationId === 2));
        setActivityThirdLocation(res.data.filter(item => item.locationId === 3));
      });  
    }, 3000));
  }

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
            ChooseDay={ChooseDay}
          />
        ))}
      </Days>
      {selectedDay !== null && (
        <Events
          activityFirstLocation = {activityFirstLocation} 
          activitySecondLocation = {activitySecondLocation} 
          activityThirdLocation = {activityThirdLocation}
          selectedDay={selectedDay}
          ChooseDay={ChooseDay}
          setActivityFirstLocation={setActivityFirstLocation}
          setActivitySecondLocation={setActivitySecondLocation}
          setActivityThirdLocation={setActivityThirdLocation}
        />
      )}
    </Main>
  );
}

const Days = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
