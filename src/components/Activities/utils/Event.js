import styled from "styled-components";
import Icon from "./Icon";
import useApi from "../../../hooks/useApi";

export default function Event({ talk }) {
  const { id, beginsAt, finishesAt, remainingSeats, title, userRegistered } = talk;
  const { activity } = useApi();

  function registerForTalk(talk) {
    // eslint-disable-next-line no-console
    console.log(talk);
    activity.registerUserAtActivity({ activityId: id }).then((res) => {
      // eslint-disable-next-line no-console
      console.log(res.data);
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  }

  return(
    <EventDiv onClick={() => registerForTalk(talk)}>
      <InfoEvent>
        <strong>{title}</strong>
        <p>{beginsAt} - {finishesAt}</p>
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
  height: 80px;
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
