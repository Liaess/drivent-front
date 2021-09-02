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
    hashotelReservation: null,
    hotelPrice: null,
    isPaid: null,
  });
  const [isPresential, setIsPresential] = useState(false);
  const [isOnlineOption, setIsOnlineOption] = useState(false);
  const [hasHotel, setHasHotel] = useState(false);
  const [hasntHotel, setHasntHotel] = useState(false);

  function handleModalityChoice(isOnline, price) {
    setIsSelected({
      isOnline,
      price,
      hashotelReservation: null,
      hotelPrice: null,
      isPaid: null,
    });
    if (isOnline === false) {
      setIsPresential(true);
      setIsOnlineOption(false);
      setHasntHotel(false);
      setHasHotel(false);
    } else {
      setIsPresential(false);
      setHasntHotel(false);
      setHasHotel(false);
      setIsOnlineOption(true);
    }
  }

  function handleHospitalityChoice(choice, hotelPrice) {
    if (choice === true) {
      setIsSelected({ ...isSelected, hashotelReservation: true, hotelPrice });
      setHasHotel(true);
      setHasntHotel(false);
    } else {
      setIsSelected({
        ...isSelected,
        hashotelReservation: false,
        hotelPrice: null,
      });
      setHasntHotel(true);
      setHasHotel(false);
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
                hasntHotel={hasntHotel}
                onClick={() => handleHospitalityChoice(false, 0)}
              >
                <p>Sem Hotel</p>
                <span>+ R$ 0</span>
              </Option>
              <Option
                hasHotel={hasHotel}
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
      {hasHotel || hasntHotel ? (
        <AccomodationFinishMessage isSelected={isSelected} />
      ) : (
        <div></div>
      )}
    </Main>
  );
}
