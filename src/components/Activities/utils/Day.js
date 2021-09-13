import styled from "styled-components";
import useApi from "../../../hooks/useApi";

export default function Day(props) {
  const { id, selectedDay, setSelectedDay, day, setActivityFirstLocation, setActivitySecondLocation, setActivityThirdLocation } = props;
  const { activity } = useApi();
  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  let weekday = new Date(day.date)
    .toLocaleDateString("br-PT", { weekday: "long" })
    .split("-", 1)[0];
  weekday = capitalize(weekday);
  const date = new Date(day.date).toLocaleDateString("br-PT").slice(0, 5);

  function ChooseDay(day) {
    setSelectedDay(id);
    activity.getActivitiesByDate({ date: day }).then((res) => {
      setActivityFirstLocation(res.data.filter(item => item.locationId === 1));
      setActivitySecondLocation(res.data.filter(item => item.locationId === 2));
      setActivityThirdLocation(res.data.filter(item => item.locationId === 3));
    });
  }

  return (
    <DayDiv chosen={id === selectedDay} onClick={() => ChooseDay(day.date)}>
      <span>{weekday}, </span>
      <span>{date}</span>
    </DayDiv>
  );
}

const DayDiv = styled.button`
  border: none;
  width: 131px;
  height: 37px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  background-color: ${(props) => (props.chosen ? "#FFD37D" : "#E0E0E0")};
  font-size: 14px;
  margin-right: 17px;
`;
