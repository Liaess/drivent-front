import { BsPerson, BsPersonFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { renderEachIcon } from "./EachRoomUtils";
import { Container, PersonIcons } from "./EachRoomWrapper";

export default function EachRoom({ allRooms, setChosenRoom }) {
  const [roomArray, setRoomArray] = useState([]);
  const [selectedRoomByUser, setSelectedRoomByUser] = useState([]);

  function checkIsSelected(j, i) {
    const checkRoomSelected = [...roomArray];
    checkRoomSelected.forEach((room) => {
      room.forEach((personIcon) => {
        personIcon.selectByUser = false;
      });
    });
    checkRoomSelected[j][i].selectByUser = true;
    setChosenRoom(checkRoomSelected[j][i]);
    setRoomArray(checkRoomSelected);
  }

  useEffect(() => {
    const iconsArray = [];
    allRooms.forEach((eachRoom) => {
      const icon = renderEachIcon(eachRoom);
      iconsArray.push(icon);
    });
    setRoomArray(iconsArray);
    setChosenRoom(false);
  }, [allRooms]);

  return (
    <>
      {roomArray.map((eachRoom, j) => {
        return (
          <Container
            key={j}
            id={j}
            selectedRoomByUser={selectedRoomByUser}
            disabled={eachRoom[0].isDisabled}
          >
            <div>
              <p>{eachRoom[0].number}</p>
            </div>
            <PersonIcons>
              {eachRoom.map((eachIcon, i) => {
                return (
                  <div key={i}>
                    {eachIcon.isReserved ? (
                      <BsPersonFill fontSize="1.5em" />
                    ) : eachIcon.selectByUser ? (
                      <BsPersonFill fontSize="1.5em" color="#FF4791" />
                    ) : (
                      <BsPerson
                        fontSize="1.5em"
                        onClick={() => {
                          checkIsSelected(j, i);
                          setSelectedRoomByUser(j);
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
