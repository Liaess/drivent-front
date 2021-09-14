import styled from "styled-components";

export const Container = styled.div`
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
      : props.id === props.selectedRoomByUser
        ? "#FFEED2"
        : ""};
  svg {
    cursor: ${(props) => (props.disabled ? "" : "pointer")};
    color: ${(props) => (props.disabled ? "#8C8C8C" : "")};
  }
`;

export const PersonIcons = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-evenly;
`;
