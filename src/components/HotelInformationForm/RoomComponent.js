import styled from "styled-components";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Room({ rooms }) {
  const [places, setPlaces] = useState([]);

  function checkIsSelected(j, i) {
    const newPlaces = [...places];
    newPlaces.forEach((r) => {
      r.forEach((p) => {
        p.selectByUser = false;
      });
    });
    newPlaces[j][i].selectByUser = true;
    setPlaces(newPlaces);
  }

  useEffect(() => {
    object();
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
      });
    }

    for (let i = 0; i < eachRoom.maxCapacity - eachRoom.available; i++) {
      const newIndex = allPlaces.length;
      allPlaces.push(...allPlaces, {
        place: newIndex,
        isReserved: true,
        number: eachRoom.number,
      });
    }

    return allPlaces;
  }

  return (
    <>
      {places.map((r, j) => {
        return (
          <Container>
            <p>{r[0].number}</p>
            {r.map((p, i) => {
              return (
                <>
                  {p.isReserved ? (
                    <BsPersonFill fontSize="1.5em" color="black" />
                  ) : p.selectByUser ? (
                    <BsPersonFill fontSize="1.5em" color="#FF4791" />
                  ) : (
                    <BsPerson
                      fontSize="1.5em"
                      onClick={() => checkIsSelected(j, i)}
                    />
                  )}
                </>
              );
            })}
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
