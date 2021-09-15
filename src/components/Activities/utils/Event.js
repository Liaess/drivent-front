import styled from "styled-components";
import Icon from "./Icon";
import useApi from "../../../hooks/useApi";
import { toast } from "react-toastify";

export default function Event({ talk, 
  setActivityFirstLocation, setActivitySecondLocation, 
  setActivityThirdLocation, selectedDay }) {
  const { id, beginsAt, finishesAt, remainingSeats, title, userRegistered } = talk;
  const initialHour = beginsAt.replace(":00+00", "").split(":")[0];
  const initialMinute = beginsAt.replace(":00+00", "").split(":")[1];
  const finalHour = finishesAt.replace(":00+00", "").split(":")[0];
  const finalMinute = finishesAt.replace(":00+00", "").split(":")[1];

  const { activity } = useApi();

  const duration = (parseInt(finalHour) - parseInt(initialHour)) +  ((parseInt(finalMinute) - parseInt(initialMinute)) / 60);

  function registerForTalk(talk) {
    if(talk.remainingSeats === 0) return toast("O evento está esgotado");
    activity.registerUserAtActivity(talk).then(() => {
      activity.getActivitiesByDate({ date: selectedDay }).then((res) => {
        // eslint-disable-next-line no-console
        setActivityFirstLocation(res.data.filter(item => item.locationId === 1));
        setActivitySecondLocation(res.data.filter(item => item.locationId === 2));
        setActivityThirdLocation(res.data.filter(item => item.locationId === 3));
      });
      toast("Inscrito com sucesso!");
      // window.location.reload();
    }).catch(() => toast("Usuário já inscrito ou há conflito de horário :("));
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
