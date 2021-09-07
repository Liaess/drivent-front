import styled from "styled-components";
import api from "../../services/api";
import { BsFillPersonFill, BsPerson } from "react-icons/bs";
import { useState, useEffect  } from "react";
import useApi from "../../hooks/useApi";

import resort from "./images/Resort.png";
import palace from "./images/Palace.png";
import world from "./images/World.png";

export default function HotelInformationForm() {
  const [hotelWasSelected, setHotelWasSelected] = useState(false);
  const [chosePalace, setChosePalace] = useState(false);
  const [choseResort, setChoseResort] = useState(false);
  const [choseWorld, setChoseWorld] = useState(false);
  const [test, setTest] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [enrollmentInfo, setEnrollmentInfo] = useState([]);

  const { enrollment } = useApi();

  useEffect(() => {
    enrollment.getPersonalInformations().then((response) => console.log(response.data));
    api.get("hotel/").then((response) => console.log(response.data));
  }, []);

  function getHotelRooms(id) {
    api.get(`hotel/${id}`).then((response) => {console.log(response.data); setRooms(response.data);});
  }

  return (
    <>
      <Header>Escolha de hotel e quarto</Header>

      {/* <NotAbleToMessage>
        <p>Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades</p>
      </NotAbleToMessage>
      <NotAbleToMessage>
        <p>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</p>
      </NotAbleToMessage> */}

      <Body>
        <h2>Primeiro, escolha o Hotel</h2>

        <HotelOptions>
          <HotelChoice 
            onClick={() => {
              setHotelWasSelected(true);
              setChoseResort(true);
              setChosePalace(false);
              setChoseWorld(false);
              getHotelRooms(1);
            }}
            choseResort={choseResort}
          >
            <img src={resort} />

            <h1>Driven Resort</h1>
            <p>Tipo de acomodação:</p>
            <span>Single & Double</span>

            <p>Vagas Disponíveis:</p>
            <span>100</span>
          </HotelChoice>

          <HotelChoice
            onClick={() => {
              setHotelWasSelected(true);
              setChosePalace(true);
              setChoseWorld(false);
              setChoseResort(false);
              getHotelRooms(2);
            }}
            chosePalace={chosePalace}
          >
            <img src={palace} />

            <h1>Driven Palace</h1>
            <p>Tipo de acomodação:</p>
            <span>Single, Double & Triple</span>

            <p>Vagas Disponíveis:</p>
            <span>100</span>
          </HotelChoice>

          <HotelChoice
            onClick={() => {
              setHotelWasSelected(true);
              setChoseWorld(true);
              setChosePalace(false);
              setChoseResort(false);
              getHotelRooms(3);
            }}
            choseWorld={choseWorld}
          >
            <img src={world} />

            <h1>Driven World</h1>

            <p>Tipo de acomodação:</p>
            <span>Single & Double</span>

            <p>Vagas Disponíveis:</p>
            <span>100</span>
          </HotelChoice>
        </HotelOptions>

        <h2>Otimo! Agora escolha seu quarto</h2>
        <RoomOptions hotelWasSelected={hotelWasSelected}>
          <Room>
            <p>Numero</p>
            {test? <BsFillPersonFill color="red" fontSize="1.5em" onClick={() => setTest(!test)}/> : <BsPerson fontSize="1.5em" onClick={(e) => console.log(e.currentTarget)}/>}
          </Room>
          <Room>
            <p>Numero</p>
            <BsFillPersonFill fontSize="1.5em" />
          </Room>
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
    props.choseResort
      ? "#FFEED2"
      : props.chosePalace
        ? "#FFEED2"
        : props.choseWorld
          ? "#FFEED2"
          : "#f1f1f1"};
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
  display: ${(props) => (props.hotelWasSelected ? "flex" : "none")};
  flex-flow: row wrap;
`;

const Room = styled.div`
  width: 190px;
  height: 45px;
  border-radius: 5px;
  border: solid 1px #cecece;
  margin-bottom: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const NotAbleToMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    font-size: 20px;
    color: #8E8E8E;
    line-height: 23px;
  }
`;
