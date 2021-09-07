import { useState } from "react";
import {
  Main,
  Choices,
  Option,
  Accommodation,
} from "../PaymentInformationForm/PaymentWrapper";
import AccomodationFinishMessage from "./AccomodationFinishMessage";

export default function PaymentInformationForm() {
  const [isSelected, setIsSelected] = useState({
    isOnline: null,
    price: null,
    hasHotelReservation: null,
    hotelPrice: null,
  });
  const [isPresential, setIsPresential] = useState(false);
  const [isOnlineOption, setIsOnlineOption] = useState(false);
  const [choseToHaveHotel, setChoseToHaveHotel] = useState(false);
  const [choseNotToHaveHotel, setChoseNotToHaveHotel] = useState(false);

  function handleModalityChoice(isOnline, price) {
    setIsSelected({
      isOnline,
      price,
      hasHotelReservation: null,
      hotelPrice: null,
    });
    if (isOnline === false) {
      setIsPresential(true);
      setIsOnlineOption(false);
      setChoseNotToHaveHotel(false);
      setChoseToHaveHotel(false);
    } else {
      setIsPresential(false);
      setChoseNotToHaveHotel(false); //alterar para true
      setChoseToHaveHotel(false);
      setIsOnlineOption(true);
    }
  }

  function handleHospitalityChoice(hotelChoice, hotelPrice) {
    if (hotelChoice) {
      setIsSelected({ ...isSelected, hasHotelReservation: true, hotelPrice });
      setChoseToHaveHotel(true);
      setChoseNotToHaveHotel(false);
    } else {
      setIsSelected({
        ...isSelected,
        hasHotelReservation: false,
        hotelPrice: null,
      });
      setChoseNotToHaveHotel(true);
      setChoseToHaveHotel(false);
    }
  }

  return (
    <Main>
      <div>
        <h1>Ingresso e pagamento</h1>
        <h2>Primeiro, escolha sua modalidade de ingresso</h2>
        <Choices>
          <Option
            isPresential={isPresential}
            onClick={() => handleModalityChoice(false, 250)}
          >
            <p>Presencial</p>
            <span>R$ 250</span>
          </Option>
          <Option
            isOnlineOption={isOnlineOption}
            onClick={() => handleModalityChoice(true, 100)}
          >
            <p>Online</p>
            <span>R$ 100</span>
          </Option>
        </Choices>
      </div>
      <div>
        {isPresential ? (
          <Accommodation>
            <h2>Ótimo! Agora escolha sua modalidade de hospedagem</h2>
            <Choices>
              <Option
                choseNotToHaveHotel={choseNotToHaveHotel}
                onClick={() => handleHospitalityChoice(false, 0)}
              >
                <p>Sem Hotel</p>
                <span>+ R$ 0</span>
              </Option>
              <Option
                choseToHaveHotel={choseToHaveHotel}
                onClick={() => handleHospitalityChoice(true, 350)}
              >
                <p>Com Hotel</p>
                <span>+ R$ 350</span>
              </Option>
            </Choices>
          </Accommodation>
        ) : isOnlineOption ? (
          <AccomodationFinishMessage isSelected={isSelected} />
        ) : (
          <></>
        )}
      </div>
      {choseToHaveHotel || choseNotToHaveHotel ? (
        <AccomodationFinishMessage isSelected={isSelected} />
      ) : (
        <div></div>
      )}
    </Main>
  );
}
