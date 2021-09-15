import styled from "styled-components";
import Icon from "./Icon";
import useApi from "../../../hooks/useApi";
import { toast } from "react-toastify";

export default function Event({ talk, chosenEvents, ChooseDay, selectedDay }) {
  const { id, beginsAt, finishesAt, remainingSeats, title, userRegistered } = talk;
  const initialHour = beginsAt.replace(":00+00", "").split(":")[0];
  const initialMinute = beginsAt.replace(":00+00", "").split(":")[1];
  const finalHour = finishesAt.replace(":00+00", "").split(":")[0];
  const finalMinute = finishesAt.replace(":00+00", "").split(":")[1];

  const { activity } = useApi();

  const duration = (parseInt(finalHour) - parseInt(initialHour)) +  ((parseInt(finalMinute) - parseInt(initialMinute)) / 60);

  function registerForTalk(talk) {
    if(chosenEvents.length !== 0) {
      for(let i = 0; i < chosenEvents.length; i++) {
        if(chosenEvents[i].finishesAt <= talk.beginsAt) {
          // eslint-disable-next-line no-console
          console.log(selectedDay);
          ChooseDay(selectedDay);
        };
      }
    } else {
      // eslint-disable-next-line no-console
      console.log(selectedDay);
      ChooseDay(selectedDay);
    };
  };
  
  return(
    <EventDiv onClick={() => registerForTalk(talk)} duration={duration} userRegistered={userRegistered}>
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
  background-color: ${props => props.userRegistered ? "#D0FFDB" : "#F1F1F1"};
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
