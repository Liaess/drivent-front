import { Switch, useRouteMatch } from "react-router-dom";

import ConditionalRoute from "../../../components/Router/ConditionalRoute";

import TicketContext, { TicketProvider } from "../../../contexts/TicketContext";

import UnathourizedToChoose from "../../../components/Activities/UnathourizedToChoose";
import { useContext } from "react";
import ScheduleActivities from "../../../components/Activities/ScheduleActivities";

export default function Activities() {
  const match = useRouteMatch();

  return (
    <TicketProvider>
      <Switch>
        <ConditionalRoute
          check={ensureTicketIsNotPayed}
          path={`${match.path}/unauthorized`}
          exact
        >
          <UnathourizedToChoose />
        </ConditionalRoute>
        <ConditionalRoute
          check={ensureTicketIsPresencialModality}
          path={`${match.path}`}
          exact
        >
          <ScheduleActivities />
        </ConditionalRoute>
      </Switch>
    </TicketProvider>
  );
}

function ensureTicketIsNotPayed() {
  const { ticketData } = useContext(TicketContext);
  return [
    { to: "/dashboard/activities", check: () => !(ticketData?.isPaid && !ticketData?.isOnline) },
  ];
}

function ensureTicketIsPresencialModality() {
  const { ticketData } = useContext(TicketContext);

  return [
    { to: "/dashboard/activities/unauthorized", check: () => !(!(ticketData?.isPaid) || (ticketData?.isOnline)) }
  ];
}
