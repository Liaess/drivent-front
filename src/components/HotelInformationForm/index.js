import styled from "styled-components";

import resort from "./images/Resort.png";
import palace from "./images/Palace.png";
import world from "./images/World.png";

export default function HotelInformationForm() {
  return (
    <Body>
      <h1>Escolha de hotel e quarto</h1>
      <h2>Primeiro Escolha o Hotel</h2>

      <HotelOptions>
        <HotelChoice>
          <img src={resort} />

          <h1>Driven Resort</h1>
          <p>Tipo de acomodação:</p>
          <span>Single & Double</span>

          <p>Vagas Disponíveis:</p>
          <span>100</span>
        </HotelChoice>

        <HotelChoice>
          <img src={palace} />

          <h1>Driven Palace</h1>
          <p>Tipo de acomodação:</p>
          <span>Single & Double</span>

          <p>Vagas Disponíveis:</p>
          <span>100</span>
        </HotelChoice>

        <HotelChoice>
          <img src={world} />

          <h1>Driven World</h1>

          <p>Tipo de acomodação:</p>
          <span>Single & Double</span>

          <p>Vagas Disponíveis:</p>
          <span>100</span>
        </HotelChoice>
      </HotelOptions>

      <h2>Otimo! Agora escolha seu quarto</h2>
      <RoomOptions>
        <Room>
          <p>Numero</p>
          <p>boneco</p>
        </Room>
        <Room>
          <p>Numero</p>
          <p>boneco</p>
        </Room>
        <Room>
          <p>Numero</p>
          <p>boneco</p>
        </Room>
        <Room>
          <p>Numero</p>
          <p>boneco</p>
        </Room>
      </RoomOptions>
    </Body>
  );
}

const Body = styled.div`
  h1 {
    font-size: 34px;
  }
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
  background-color: #f1f1f1;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Room = styled.div`
  width: 190px;
  height: 45px;
  border-radius: 5px;
  border: solid 1px #cecece;
`;
