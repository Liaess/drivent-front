import { Switch, useRouteMatch } from "react-router-dom";

import ConditionalRoute from "../../../components/Router/ConditionalRoute";

import TicketContext, { TicketProvider } from "../../../contexts/TicketContext";

// import UnathourizedToChoose from "../../../components/Payment/PaymentInformationForm";
import UnathourizedToChoose from "../../../components/Activities/UnathourizedToChoose";
import { useContext } from "react";

export default function Activities() {
  const match = useRouteMatch();

  return (
    <TicketProvider>
      <Switch>
        <ConditionalRoute
          check={ensureExistsPaymentInfo}
          path={`${match.path}`}
          exact
        >
          <UnathourizedToChoose />
        </ConditionalRoute>
        <ConditionalRoute
          check={ensureNotExistsPaymentInfo}
          path={`${match.path}/confirmation`}
          exact
        >
          <UnathourizedToChoose />
        </ConditionalRoute>
      </Switch>
    </TicketProvider>
  );
}

function ensureNotExistsPaymentInfo() {
  const { ticketData } = useContext(TicketContext);
  // eslint-disable-next-line no-console
  console.log(ticketData);

  return [{ to: "/dashboard/activities", check: () => !!ticketData?.isPaid }];
}

function ensureExistsPaymentInfo() {
  const { ticketData } = useContext(TicketContext);
  // eslint-disable-next-line no-console
  console.log(ticketData);

  return [{ to: "/dashboard/activities/schedule", check: () => !ticketData?.isPaid }];
}
