import Button from "../../Form/Button";
import { HotelChoice } from "./HotelAndChosenRoomWrapper";

export default function HotelAndChosenRoom({ chosenRoom, isLoading, setIsReserved }) {
  return isLoading ? (
    <div>
      <HotelChoice chosenHotel={false}>
        <img alt={chosenRoom.hotel.name} src={chosenRoom.hotel.image} />

        <h1>{chosenRoom.hotel.name}</h1>
        <p>Quarto reservado:</p>
        <span>
          {chosenRoom.number} ({chosenRoom.type})
        </span>

        <p>Pessoas no seu quarto</p>
        <span>
          {chosenRoom.maxCapacity !== 1
            ? `Você e mais ${chosenRoom.maxCapacity - 1}`
            : "Você"}
        </span>
      </HotelChoice>
      <Button
        onClick={() => {
          setIsReserved(false);
        }}
      >
        Trocar de quarto
      </Button>
    </div>
  ) : (
    ""
  );
}

