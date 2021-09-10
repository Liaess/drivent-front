import styled from "styled-components";
import Button from "../Form/Button";

export default function ChosenRoom({ choosen, isLoading }) {
  return isLoading ? (
    <div>
      <HotelChoice chosenHotel={false}>
        <img alt={choosen.hotel.name} src={choosen.hotel.image} />

        <h1>{choosen.hotel.name}</h1>
        <p>Quarto reservado:</p>
        <span>
          {choosen.number} ({choosen.type})
        </span>

        <p>Pessoas no seu quarto</p>
        <span>
          {choosen.maxCapacity !== 1
            ? `Você e mais ${choosen.maxCapacity - 1}`
            : "Você"}
        </span>
      </HotelChoice>
      <Button
        onClick={() => {
        }}
      >
        Trocar de quarto
      </Button>
    </div>
  ) : (
    ""
  );
}

const HotelChoice = styled.div`
  margin-top: 20px;
  width: 195px;
  height: 265px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.id === props.chosenHotel.id ? "#FFEED2" : "#f1f1f1"};
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
