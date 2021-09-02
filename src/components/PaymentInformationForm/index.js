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
    option: null,
    price: null,
    hotel: null,
    hotelPrice: null,
  });
  const [isPresential, setIsPresential] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [hasHotel, setHasHotel] = useState(false);
  const [hasntHotel, setHasntHotel] = useState(false);

  function handleModalityChoice(option, price) {
    setIsSelected({ option, price, hotel: null, hotelPrice: null });
    if (option === "Presencial") {
      setIsPresential(true);
      setIsOnline(false);
      setHasntHotel(false);
      setHasHotel(false);
    } else {
      setIsPresential(false);
      setHasntHotel(false);
      setHasHotel(false);
      setIsOnline(true);
    }
  }

  function handleHospitalityChoice(choice, hotelPrice) {
    if (choice === "hasHotel") {
      setIsSelected({ ...isSelected, hotel: true, hotelPrice });
      setHasHotel(true);
      setHasntHotel(false);
    } else {
      setIsSelected({ ...isSelected, hotel: false, hotelPrice: null });
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
            onClick={() => handleModalityChoice("Presencial", 250)}
          >
            <p>Presencial</p>
            <span>R$ 250</span>
          </Option>
          <Option
            isOnline={isOnline}
            onClick={() => handleModalityChoice("Online", 100)}
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
                onClick={() => handleHospitalityChoice("hasntHotel", 0)}
              >
                <p>Sem Hotel</p>
                <span>+ R$ 0</span>
              </Option>
              <Option
                hasHotel={hasHotel}
                onClick={() => handleHospitalityChoice("hasHotel", 350)}
              >
                <p>Com Hotel</p>
                <span>+ R$ 350</span>
              </Option>
            </Choices>
          </Accommodation>
        ) : isOnline ? (
          <AccomodationFinishMessage isSelected={isSelected}/>
        ) : (
          <></>
        )}
      </div>
      {hasHotel || hasntHotel ? (
        <AccomodationFinishMessage isSelected={isSelected}/>
      ) : (
        <div></div>
      )}
    </Main>
  );
}
