import { useState, useEffect, useContext } from "react";
import useApi from "../../hooks/useApi";
import EachRoom from "./EachRoomComponent/";
import Button from "../Form/Button";
import HotelAndChosenRoom from "./HotelAndChosenRoom/";
import {
  Header,
  Body,
  HotelOptions,
  HotelChoice,
  RoomOptions,
  NotAbleToAcessMessage,
} from "./HotelsInformationFormWrapper";
import TicketContext from "../../contexts/TicketContext";

export default function HotelsInformationForm() {
  const [chosenHotel, setChosenHotel] = useState([]);
  const [chosenRoom, setChosenRoom] = useState({});
  const [isReserved, setIsReserved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allHoltes, setAllHotels] = useState([]);
  const [allRooms, setAllRooms] = useState([]);
  const [checkIsPaid, setCheckIsPaid] = useState(false);
  const [checkIsOnline, setCheckIsOnline] = useState(false);
  const [loadingComponent, setLoadingComponent] = useState(false);
  const [selectedRoomByUser, setSelectedRoomByUser] = useState([]);
  const { ticketData } = useContext(TicketContext);

  const { hotel, enrollment } = useApi();

  useEffect(async() => {
    const resUserInformation = await enrollment.getPersonalInformations();
    if (resUserInformation.data.length === 0) {
      setLoadingComponent(true);
      return;
    }
    if (ticketData === null) {
      setCheckIsPaid(true);
      return;
    }
    if (ticketData?.isOnline) {
      setCheckIsOnline(true);
    }
  }, []);

  useEffect(() => {
    getHotelAndRooms();
    checkUserReserve();
  }, []);

  useEffect(() => {
    setAllRooms([]);
    setChosenHotel([]);
    setInterval(() => {
      getHotelAndRooms();
    }, 3000);
  }, [isReserved]);

  function reserveUserRoom() {
    const body = { roomId: chosenRoom.roomId };
    hotel.save(body).then(() => {
      getHotelAndRooms();
      checkUserReserve();
    });
  }

  async function checkUserReserve() {
    const res = await hotel.getRoomInformation();
    if (res.data.length !== 0) {
      setChosenRoom(res.data[0].room);
      setIsReserved(true);
      setIsLoading(true);
    }
  }

  async function getHotelAndRooms() {
    const res = await hotel.getHotelsInformation();
    res.data.forEach((hotels) => {
      let totalAvailableCount = 0;
      hotels.rooms.forEach((eachRoom) => {
        totalAvailableCount += eachRoom.available;
      });
      hotels.totalAvailable = totalAvailableCount;
    });
    setAllHotels(res.data);
  }

  useEffect( () => {
    if(chosenHotel.length !== 0) {
      const hotel = allHoltes.filter((hotel) => {
        return hotel.id === chosenHotel.id;
      });
      setAllRooms([...hotel[0].rooms]);
    };
  }, [allHoltes]);

  return (
    <>
      {loadingComponent ? (
        <>
          <NotAbleToAcessMessage>
            <p>Você precisa completar sua inscrição antes</p>
            <span>de prosseguir pra escolha de ingresso</span>
          </NotAbleToAcessMessage>
        </>
      ) : checkIsPaid ? (
        <>
          <NotAbleToAcessMessage>
            <p>Você precisa ter confirmado pagamento antes</p>
            <span>de fazer a escolha de hospedagem</span>
          </NotAbleToAcessMessage>
        </>
      ) : checkIsOnline ? (
        <>
          <NotAbleToAcessMessage>
            <p>Sua modalidade de ingresso não inclui hospedagem</p>
            <span>Prossiga para a escolha de atividades</span>
          </NotAbleToAcessMessage>
        </>
      ) : isReserved ? (
        <>
          <Header>Escolha de hotel e quarto</Header>
          <Body>
            <h2>Você já escolheu seu quarto:</h2>
            <HotelAndChosenRoom
              chosenRoom={chosenRoom}
              isLoading={isLoading}
              setIsReserved={setIsReserved}
            />
          </Body>
        </>
      ) : (
        <>
          <Header>Escolha de hotel e quarto</Header>
          <Body>
            <h2>Primeiro, escolha o Hotel</h2>
            <HotelOptions>
              {allHoltes.map((eachHotel, i) => {
                return (
                  <HotelChoice
                    id={eachHotel.id}
                    chosenHotel={chosenHotel}
                    key={i}
                    onClick={() => {
                      setChosenHotel(eachHotel);
                      setSelectedRoomByUser([]);
                      setAllRooms(eachHotel.rooms);
                    }}
                  >
                    <img alt={eachHotel.name} src={eachHotel.image} />
                    <h1>{eachHotel.name}</h1>
                    <p>Tipo de acomodação:</p>
                    <span>{eachHotel.roomTypes}</span>
                    <p>Vagas Disponíveis:</p>
                    <span>{eachHotel.totalAvailable}</span>
                  </HotelChoice>
                );
              })}
            </HotelOptions>
            <h2>Otimo! Agora escolha seu quarto</h2>
            <RoomOptions chosenHotel={chosenHotel}>
              <EachRoom allRooms={allRooms} setChosenRoom={setChosenRoom} chosenRoom={chosenRoom} selectedRoomByUser={selectedRoomByUser} setSelectedRoomByUser={setSelectedRoomByUser} />
            </RoomOptions>
            <Button
              style={{ display: `${chosenRoom ? "block" : "none"}` }}
              onClick={reserveUserRoom}
            >
              Reservar Quarto
            </Button>
          </Body>
        </>
      )}
    </>
  );
}
