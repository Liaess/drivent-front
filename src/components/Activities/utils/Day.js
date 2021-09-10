import { useState } from "react";
import styled from "styled-components";
import useApi from "../../../hooks/useApi";

export default function Day({ day, setActivities }) {
  const [chosen, setChosen] = useState(false);
  const { activity } = useApi();
  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  };
    
  let weekday = new Date(day.date).toLocaleDateString("br-PT", { weekday: "long" }).split("-", 1)[0];
  weekday = capitalize(weekday);
  const date = new Date(day.date).toLocaleDateString("br-PT").slice(0, 5);

  function ChooseDay(day) {
    activity.getActivitiesByDate( { date: day } ).then(res => {
      setChosen(true);
      setActivities(res.data);
    });
  };

  return(
    <DayDiv chosen={chosen} onClick={() => ChooseDay(day.date)}>
      <span>{weekday}, </span>              
      <span>{date}</span>              
    </DayDiv>);
}

const DayDiv = styled.button`
  border: none;
  width: 131px;
  height: 37px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  background-color: ${props => props.chosen ? "background-color: #E0E0E0;" : "#FFD37D"}
  font-size: 14px;
  margin-right: 17px;
`;
