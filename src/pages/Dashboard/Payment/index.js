import { Switch, useRouteMatch } from "react-router-dom";

import ConditionalRoute from "../../../components/Router/ConditionalRoute";

import TicketContext, { TicketProvider } from "../../../contexts/TicketContext";

import PaymentInformationForm from "../../../components/Payment/PaymentInformationForm";
import PaymentConfirmationForm from "../../../components/Payment/PaymentConfirmationForm";
import { useContext } from "react";

export default function Payment() {
  const match = useRouteMatch();

  return (
    <TicketProvider>
      <Switch>
        <ConditionalRoute
          check={ensureExistsTicketInfo}
          path={`${match.path}`}
          exact
        >
          <PaymentInformationForm />
        </ConditionalRoute>
        <ConditionalRoute
          check={ensureNotExistsTicketInfo}
          path={`${match.path}/confirmation`}
          exact
        >
          <PaymentConfirmationForm />
        </ConditionalRoute>
      </Switch>
    </TicketProvider>
  );
}

function ensureNotExistsTicketInfo() {
  const { ticketData } = useContext(TicketContext);

  return [{ to: "/dashboard/payment", check: () => !!ticketData }];
}

function ensureExistsTicketInfo() {
  const { ticketData } = useContext(TicketContext);

  return [{ to: "/dashboard/payment/confirmation", check: () => !ticketData }];
}
