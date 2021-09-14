import styled from "styled-components";

export const Header = styled.h1`
  font-size: 34px;
`;

export const Body = styled.div`
  h2 {
    margin-top: 35px;
    color: #8e8e8e;
    margin-bottom: 10px;
  }
`;

export const HotelOptions = styled.div`
  display: flex;
  align-items: center;
`;

export const HotelChoice = styled.div`
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

export const RoomOptions = styled.div`
  display: ${(props) => (props.chosenHotel ? "flex" : "none")};
  flex-flow: row wrap;
`;

export const NotAbleToAcessMessage = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  color: #8e8e8e;
  line-height: 23px;
`;
