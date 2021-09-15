import styled from "styled-components";
import Icon from "./Icon";
import useApi from "../../../hooks/useApi";

export default function Event({ talk }) {
  const { id, beginsAt, finishesAt, remainingSeats, title, userRegistered, chosenEvents, setChosenEvents } = talk;
  const initialHour = beginsAt.replace(":00+00", "").split(":")[0];
  const initialMinute = beginsAt.replace(":00+00", "").split(":")[1];
  const finalHour = finishesAt.replace(":00+00", "").split(":")[0];
  const finalMinute = finishesAt.replace(":00+00", "").split(":")[1];

  const { activity } = useApi();

  const duration = (parseInt(finalHour) - parseInt(initialHour)) +  ((parseInt(finalMinute) - parseInt(initialMinute)) / 60);
  // eslint-disable-next-line no-console
  console.log(duration);

  function registerForTalk(talk) {
    activity.registerUserAtActivity({ talk }).then((res) => {
      const newArr = [...chosenEvents, talk];
      setChosenEvents(newArr);
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  }
  // eslint-disable-next-line no-console
  console.log("array de eventos do user", chosenEvents);

  return(
    <EventDiv onClick={() => registerForTalk(talk)} duration={duration}>
      <InfoEvent>
        <strong>{title}</strong>
        <p>{initialHour}:{initialMinute} - {finalHour}:{finalMinute}</p>
      </InfoEvent>
      <Icon 
        remainingSeats={remainingSeats}
        userRegistered={userRegistered}
      />
    </EventDiv>
  );
}

const EventDiv = styled.div`
  border-radius: 5px;
  width: 265px;
  background-color: #F1F1F1;
  height: calc(${props => props.duration} * 80px);
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #343434;
  font-size: 12px;

  p {
    margin-top: 6px;
  }
`;

const InfoEvent = styled.div`
  margin-left: 10px;
`;
