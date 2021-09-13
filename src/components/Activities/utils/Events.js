import styled from "styled-components";
import Event from "./Event";

export default function Events(props) {
  const { activityFirstLocation, activitySecondLocation, activityThirdLocation } = props;
  return (
    <EventsDiv>
      <div>
        <h1>Auditório Principal</h1>
        <Place>
          {
            activityFirstLocation?.map((activity, i) => 
              <Event
                key={i}
                activity={activity}
              />
            )
          }
        </Place>
      </div>
      <div>
        <h1>Auditório Lateral</h1>
        <Place>
          {
            activitySecondLocation?.map((activity, i) => 
              <Event
                key={i}
                activity={activity}
              />
            )
          }

        </Place>
      </div>
      <div>
        <h1>Sala de Workshop</h1>
        <Place>
          {
            activityThirdLocation?.map((activity, i) => 
              <Event
                key={i}
                activity={activity}
              />
            )
          }

        </Place>
      </div>
    </EventsDiv>
  );
}

const EventsDiv = styled.div`
  display: flex;
  h1 {
    font-size: 17px;
    color: #7b7b7b;
    text-align: center;
    padding-bottom: 7px;
  }
`;

const Place = styled.div`
  border: 1px solid #d7d7d7;
  width: 288px;
  height: 391px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
