import styled from "styled-components";
import Icon from "./Icon";

// beginsAt: "10:00"
// date: "2021-09-29T03:00:00.000Z"
// finishesAt: "11:00"
// id: 2
// location: {id: 1, name: "Salão Boladão"}
// locationId: 1
// remainingSeats: 13
// title: "Bootbar 2"

export default function Event({ activity }) {
  const { beginsAt, finishesAt, remainingSeats, title } = activity;

  return(
    <EventDiv>
      <InfoEvent>
        <strong>{title}</strong>
        <p>{beginsAt} - {finishesAt}</p>
      </InfoEvent>
      <Icon remainingSeats={remainingSeats} />
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
