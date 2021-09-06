import { useState, useEffect } from "react";
import { createContext } from "react";
import useApi from "../hooks/useApi";

const TicketContext = createContext();
export default TicketContext;

export function TicketProvider({ children }) {
  const [ticketData, setTicketData] = useState(null);
  const { ticket } = useApi();

  useEffect(() => {
    ticket
      .getTicketInformation()
      .then((res) => {
        setTicketData(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  return (
    <TicketContext.Provider value={{ ticketData, setTicketData }}>
      {children}
    </TicketContext.Provider>
  );
}
