import {
  Accommodation,
  Finish,
} from "../PaymentInformationForm/PaymentWrapper";

export default function AccomodationFinishMessage({ isSelected }) {
  return (
    <Accommodation>
      <h2>
        Fechado! O total ficou em
        <span>R$ {isSelected.price + isSelected.hotelPrice}</span>. Agora é só
        confirmar:
      </h2>
      <Finish>RESERVAR INGRESSO</Finish>
    </Accommodation>
  );
}
