import styled from "styled-components";

export const Main = styled.main`
  h1 {
    font-size: 2.125rem;
    padding-bottom: 40px;
  }
  h2 {
    color: #8e8e8e;
    font-size: 1.25rem;
    padding-bottom: 20px;
  }
  h2 span {
    font-weight: bold;
  }
`;

export const Choices = styled.div`
  display: flex;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  width: 145px;
  height: 145px;
  justify-content: center;
  align-items: center;
  border: 1px solid #cecece;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 40px;
  background-color: ${(props) =>
    props.isOnline
      ? "#FFEED2"
      : props.isPresential
        ? "#FFEED2"
        : props.hasHotel
          ? "#FFEED2"
          : props.hasntHotel
            ? "#FFEED2"
            : "#fff"};
  :nth-child(2) {
    margin-left: 25px;
  }
  p {
    font-size: 1rem;
    color: #454545;
    padding-bottom: 5px;
  }
  span {
    font-size: 0.875rem;
    color: #898989;
  }
`;

export const Accommodation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Finish = styled.button`
  width: 162px;
  height: 37px;
  background-color: #e0e0e0;
  border: none;
  outline: none;
  color: #000;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  font-size: 12px;
  cursor: pointer;
`;
