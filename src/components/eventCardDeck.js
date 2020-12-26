import { useContext } from "react";
import { store } from "./appContext";
import EventCard from "./eventCard";
import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-auto-rows: max-content;
  row-gap: 1em;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

function EventCardDeck() {
  const { state } = useContext(store);
  return (
    <CardContainer>
      {state.eventData.map((event, index) => (
        <EventCard key={event.name} cardData={event} />
      ))}
    </CardContainer>
  );
}

export default EventCardDeck;
