import styled from "styled-components";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Room({ rooms, setRoom, hotel }) {
  const [places, setPlaces] = useState([]);
  const [chosenRoom, setChosenRoom] = useState([]);

  function checkIsSelected(j, i) {
    const newPlaces = [...places];
    newPlaces.forEach((r) => {
      r.forEach((p) => {
        p.selectByUser = false;
      });
    });
    newPlaces[j][i].selectByUser = true;
    setRoom(newPlaces[j][i]);
    setPlaces(newPlaces);
  }

  useEffect(() => {
    object();
    setRoom(false);
    setChosenRoom("");
  }, [rooms]);

  function object() {
    const objectArray = [];
    let object = [];
    rooms.forEach((r) => {
      object = renderPerson(r);
      objectArray.push(object);
    });
    setPlaces(objectArray);
  }

  function renderPerson(eachRoom) {
    const allPlaces = [];

    for (let i = 1; i <= eachRoom.available; i++) {
      allPlaces.push({
        place: i,
        isReserved: false,
        selectByUser: false,
        number: eachRoom.number,
        type: eachRoom.type,
        available: eachRoom.available,
        hotel: hotel.name,
        hotelImage: hotel.image,
        roomId: eachRoom.id,
      });
    }

    for (let i = 0; i < eachRoom.maxCapacity - eachRoom.available; i++) {
      const newIndex = allPlaces.length;
      if (eachRoom.available === 0) {
        allPlaces.push({
          place: newIndex,
          isReserved: true,
          isDisabled: true,
          number: eachRoom.number,
          type: eachRoom.type,
          available: eachRoom.available,
          hotel: hotel.name,
          hotelImage: hotel.image,
          roomId: eachRoom.id,
        });
      } else {
        allPlaces.push({
          place: newIndex,
          isReserved: true,
          number: eachRoom.number,
          type: eachRoom.type,
          available: eachRoom.available,
          hotel: hotel.name,
          hotelImage: hotel.image,
          roomId: eachRoom.id,
        });
      }
    }
    return allPlaces;
  }

  return (
    <>
      {places.map((r, j) => {
        return (
          <Container
            key={j}
            id={j}
            chosenRoom={chosenRoom}
            disabled={r[0].isDisabled}
          >
            <div>
              <p>{r[0].number}</p>
            </div>
            <PersonIcons>
              {r.map((p, i) => {
                return (
                  <div key={i}>
                    {p.isReserved ? (
                      <BsPersonFill fontSize="1.5em"/>
                    ) : p.selectByUser ? (
                      <BsPersonFill fontSize="1.5em" color="#FF4791" />
                    ) : (
                      <BsPerson
                        fontSize="1.5em"
                        onClick={() => {
                          checkIsSelected(j, i);
                          setChosenRoom(j);
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </PersonIcons>
          </Container>
        );
      })}
    </>
  );
}

const Container = styled.div`
  width: 190px;
  height: 45px;
  border-radius: 5px;
  border: solid 1px #cecece;
  margin-bottom: 10px;
  margin-right: 10px;
  padding-left: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.disabled
      ? "#E9E9E9"
      : props.id === props.chosenRoom
        ? "#FFEED2"
        : ""};
  svg {
    cursor: ${(props) => (props.disabled ? "" : "pointer")};
    color: ${(props) => (props.disabled ? "#8C8C8C" : "")};
  }
`;

const PersonIcons = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-evenly;
`;
