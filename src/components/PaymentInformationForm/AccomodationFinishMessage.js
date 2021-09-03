import {
  Accommodation,
  Finish,
} from "../PaymentInformationForm/PaymentWrapper";

export default function AccomodationFinishMessage({ isSelected, saveTicketInfos }) {
  return (
    <Accommodation>
      <h2>
        Fechado! O total ficou em
        <span> R$ {isSelected.price + isSelected.hotelPrice}</span>. Agora é só
        confirmar:
      </h2>
      <Finish onClick={saveTicketInfos} >RESERVAR INGRESSO</Finish>
    </Accommodation>
  );
}
