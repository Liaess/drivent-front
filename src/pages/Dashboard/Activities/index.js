import { Switch, useRouteMatch } from "react-router-dom";

import ConditionalRoute from "../../../components/Router/ConditionalRoute";

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
  const { ticketData } = useContext(TicketContext);
  return [
    {
      to: "/dashboard/activities",
      check: () => !(ticketData?.isPaid && !ticketData?.isOnline),
    },
  ];
}

function ensureTicketIsPresentialModality() {
  const { ticketData } = useContext(TicketContext);

  return [
    {
      to: "/dashboard/activities/unauthorized",
      check: () => !(!ticketData?.isPaid || ticketData?.isOnline),
    },
  ];
}
