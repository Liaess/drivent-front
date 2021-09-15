import styled from "styled-components";
import Icon from "./Icon";
import useApi from "../../../hooks/useApi";
import { toast } from "react-toastify";

export default function Event({ talk, chosenEvents, setActivityFirstLocation, setActivitySecondLocation, setActivityThirdLocation }) {
  const { id, beginsAt, finishesAt, remainingSeats, title, userRegistered } = talk;
  const initialHour = beginsAt.replace(":00+00", "").split(":")[0];
  const initialMinute = beginsAt.replace(":00+00", "").split(":")[1];
  const finalHour = finishesAt.replace(":00+00", "").split(":")[0];
  const finalMinute = finishesAt.replace(":00+00", "").split(":")[1];

  const { activity } = useApi();

  const duration = (parseInt(finalHour) - parseInt(initialHour)) +  ((parseInt(finalMinute) - parseInt(initialMinute)) / 60);

  function registerForTalkFront(talk) {
    if(talk.remainingSeats === 0) return toast("O evento está esgotado");
    if(chosenEvents.length !== 0) {
      for(let i = 0; i < chosenEvents.length; i++) {
        if(chosenEvents[i].finishesAt <= talk.beginsAt) {
          activity.registerUserAtActivity(talk).then(res => {
            // eslint-disable-next-line no-console
            console.log(res.data);
            setActivityFirstLocation(res.data.filter(item => item.locationId === 1));
            setActivitySecondLocation(res.data.filter(item => item.locationId === 2));
            setActivityThirdLocation(res.data.filter(item => item.locationId === 3));      
          });
        };
      }
    } else {
      activity.registerUserAtActivity(talk).then(res => {
        // eslint-disable-next-line no-console
        console.log(res.data);
        setActivityFirstLocation(res.data.filter(item => item.locationId === 1));
        setActivitySecondLocation(res.data.filter(item => item.locationId === 2));
        setActivityThirdLocation(res.data.filter(item => item.locationId === 3));  
      });
    }
  };

  function registerForTalkBack(talk) {
    if(talk.remainingSeats === 0) return toast("O evento está esgotado");
    activity.registerUserAtActivity(talk).then(res => {
      // eslint-disable-next-line no-console
      console.log(res.data);
      setActivityFirstLocation(res.data.filter(item => item.locationId === 1));
      setActivitySecondLocation(res.data.filter(item => item.locationId === 2));
      setActivityThirdLocation(res.data.filter(item => item.locationId === 3));
    });
  };
  
  return(
    <EventDiv onClick={() => registerForTalkBack(talk)} duration={duration} userRegistered={userRegistered}>
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
