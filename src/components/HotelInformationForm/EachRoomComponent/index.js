import { BsPerson, BsPersonFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { renderEachIcon } from "./EachRoomUtils";
import { Container, PersonIcons } from "./EachRoomWrapper";

export default function EachRoom({
  chosenRoom,
  selectedRoomByUser,
  setSelectedRoomByUser,
  allRooms,
  setChosenRoom,
}) {
  const [roomArray, setRoomArray] = useState([]);

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
      const icon = renderEachIcon(eachRoom, chosenRoom);
      iconsArray.push(icon);
    });
    if (chosenRoom?.selectByUser) {
      const selectedIcon = iconsArray.find((arrayIcon) =>
        arrayIcon.find((eachIcon) => eachIcon.roomId === chosenRoom.roomId)
      );
      if (selectedIcon) {
        selectedIcon[0].selectByUser = true;
      }
    }
    setRoomArray(iconsArray);
  }, [allRooms]);

  return (
    <>
      {roomArray.map((eachRoom, j) => {
        return (
          <Container
            key={j}
            id={eachRoom[0].roomId}
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
                          setSelectedRoomByUser(eachRoom[0].roomId);
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
