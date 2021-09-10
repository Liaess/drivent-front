import { Switch, useRouteMatch } from "react-router-dom";

import ConditionalRoute from "../../../components/Router/ConditionalRoute";

import EnrollmentContext from "../../../contexts/EnrollmentContext";
import TicketContext from "../../../contexts/TicketContext";

import UnauthorizedToChoose from "../../../components/Activities/UnauthorizedToChoose";
import { useContext } from "react";
import ScheduleActivities from "../../../components/Activities/ScheduleActivities";

export default function Activities() {
  const match = useRouteMatch();

  return (
    <Switch>
      <ConditionalRoute
        check={ensureTicketDoesntAllowChooseActivities}
        path={`${match.path}/unauthorized`}
        exact
      >
        <UnauthorizedToChoose />
      </ConditionalRoute>
      <ConditionalRoute
        check={ensureTicketIsPresentialModality}
        path={`${match.path}`}
        exact
      >
        <ScheduleActivities />
      </ConditionalRoute>
    </Switch>
  );
}

function ensureTicketDoesntAllowChooseActivities() {
  const { enrollmentData } = useContext(EnrollmentContext);
  const { ticketData } = useContext(TicketContext);

  return [
    {
      to: "/dashboard/activities",
      check: () =>
        !(enrollmentData && ticketData?.isPaid && !ticketData?.isOnline),
    },
  ];
}

function ensureTicketIsPresentialModality() {
  const { enrollmentData } = useContext(EnrollmentContext);
  const { ticketData } = useContext(TicketContext);

  return [
    {
      to: "/dashboard/activities/unauthorized",
      check: () =>
        !(!enrollmentData || !ticketData?.isPaid || ticketData?.isOnline),
    },
  ];
}
