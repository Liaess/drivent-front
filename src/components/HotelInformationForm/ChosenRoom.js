import styled from "styled-components";

export default function ChosenRoom({ room }) {
  return (
    <HotelChoice chosenHotel={false}>
      <img alt={room.hotel} src={room.hotelImage} />

      <h1>{room.hotel}</h1>
      <p>Quarto reservado:</p>
      <span>
        {room.number} ({room.type})
      </span>

      <p>Pessoas no seu quarto</p>
      <span>
        {room.available - 1 !== 0
          ? `Você e mais ${room.available - 1}`
          : "Você"}
      </span>
    </HotelChoice>
  );
}

const HotelChoice = styled.div`
  margin-top: 20px;
  width: 195px;
  height: 265px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.id === props.chosenHotel.id ? "#FFEED2" : "#f1f1f1"};
  margin-right: 40px;
  font-size: 12px;
  color: #3c3c3c;

  h1 {
    margin-left: 15px;
    font-size: 20px;
  }

  img {
    margin: 15px 20px 10px 15px;
  }

  p {
    color: #3c3c3c;
    font-weight: bold;
    margin: 12px 0 3px 15px;
  }

  span {
    margin-left: 15px;
  }
`;
