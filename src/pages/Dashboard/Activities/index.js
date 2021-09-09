import { Switch, useRouteMatch } from "react-router-dom";

import ConditionalRoute from "../../../components/Router/ConditionalRoute";

import TicketContext from "../../../contexts/TicketContext";

import UnathorizedToChoose from "../../../components/Activities/UnathorizedToChoose";
import { useContext } from "react";
import ScheduleActivities from "../../../components/Activities/ScheduleActivities";

export default function Activities() {
  const match = useRouteMatch();

  return (
    <Switch>
      <ConditionalRoute
        check={ensureTicketIsNotPayed}
        path={`${match.path}/unauthorized`}
        exact
      >
        <UnathorizedToChoose />
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

function ensureTicketIsNotPayed() {
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
