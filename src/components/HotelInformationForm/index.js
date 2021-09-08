import styled from "styled-components";
import api from "../../services/api";
import { useState, useEffect } from "react";
import useApi from "../../hooks/useApi";
import Room from "./RoomComponent";

export default function HotelInformationForm() {
  const [chosenHotel, setChosenHotel] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);

  const { ticket } = useApi();

  useEffect(() => {
    ticket
      .getTicketInformation()
      .then((response) => console.log(response.data));
    api.get("hotels/").then(({ data }) => {
      data.forEach((h) => {
        let totalAvailable = 0;
        h.rooms.forEach((r) => {
          totalAvailable += r.available;
          r.selected = false;
        });
        h.totalAvailable = totalAvailable;
      });
      setHotels(data);
    });
  }, []);

  return (
    <>
      <Header>Escolha de hotel e quarto</Header>
      <Body>
        <h2>Primeiro, escolha o Hotel</h2>

        <HotelOptions>
          {hotels.map((hotel, i) => {
            return (
              <HotelChoice
                id={hotel.id}
                chosenHotel={chosenHotel}
                key={i}
                onClick={() => {
                  setChosenHotel(hotel.id);
                  setRooms(hotel.rooms);
                }}
              >
                <img alt={hotel.name} src={hotel.image} />

                <h1>{hotel.name}</h1>
                <p>Tipo de acomodação:</p>
                <span>{hotel.roomTypes}</span>

                <p>Vagas Disponíveis:</p>
                <span>{hotel.totalAvailable}</span>
              </HotelChoice>
            );
          })}
        </HotelOptions>

        <h2>Otimo! Agora escolha seu quarto</h2>

        <RoomOptions chosenHotel={chosenHotel}>
          <Room rooms={rooms} />
        </RoomOptions>
      </Body>
    </>
  );
}

const Header = styled.h1`
  font-size: 34px;
`;

const Body = styled.div`
  h2 {
    margin-top: 35px;
    color: #8e8e8e;
    margin-bottom: 10px;
  }
`;

const HotelOptions = styled.div`
  display: flex;
  align-items: center;
`;

const HotelChoice = styled.div`
  width: 195px;
  height: 265px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.id === props.chosenHotel ? "#FFEED2" : "#f1f1f1"};
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

const RoomOptions = styled.div`
  display: ${(props) => (props.chosenHotel ? "flex" : "none")};
  flex-flow: row wrap;
`;

const NotAbleToMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 20px;
    color: #8e8e8e;
    line-height: 23px;
  }
`;
