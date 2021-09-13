import { Switch, useRouteMatch } from "react-router-dom";

import ConditionalRoute from "../../../components/Router/ConditionalRoute";

import EnrollmentContext from "../../../contexts/EnrollmentContext";
import TicketContext from "../../../contexts/TicketContext";

import UnauthorizedToChooseTickets from "../../../components/Payment/UnauthorizedToChooseTickets";
import PaymentInformationForm from "../../../components/Payment/PaymentInformationForm";
import PaymentConfirmationForm from "../../../components/Payment/PaymentConfirmationForm";
import { useContext } from "react";

export default function Payment() {
  const match = useRouteMatch();

  return (
    <Switch>
      <ConditionalRoute
        check={ensureNotExistsEnrollmentInfo}
        path={`${match.path}/unauthorized`}
        exact
      >
        <UnauthorizedToChooseTickets />
      </ConditionalRoute>
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
  );
}

function ensureNotExistsEnrollmentInfo() {
  const { enrollmentData } = useContext(EnrollmentContext);

  return [{ to: "/dashboard/payment/", check: () => !enrollmentData }];
}

function ensureExistsTicketInfo() {
  const { enrollmentData } = useContext(EnrollmentContext);
  const { ticketData } = useContext(TicketContext);

  return [
    { to: "/dashboard/payment/confirmation", check: () => !ticketData },
    { to: "/dashboard/payment/unauthorized", check: () => !!enrollmentData },
  ];
}

function ensureNotExistsTicketInfo() {
  const { enrollmentData } = useContext(EnrollmentContext);
  const { ticketData } = useContext(TicketContext);

  return [
    { to: "/dashboard/payment", check: () => !!ticketData },
    { to: "/dashboard/payment/unauthorized", check: () => !!enrollmentData },
  ];
}
