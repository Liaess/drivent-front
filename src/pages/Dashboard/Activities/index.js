import { Switch, useRouteMatch } from "react-router-dom";

import ConditionalRoute from "../../../components/Router/ConditionalRoute";

import TicketContext, { TicketProvider } from "../../../contexts/TicketContext";

import UnauthorizedToChoose from "../../../components/Activities/UnauthorizedToChoose";
import { useContext } from "react";
import ScheduleActivities from "../../../components/Activities/ScheduleActivities";

export default function Activities() {
  const match = useRouteMatch();

  return (
    <TicketProvider>
      <Switch>
        <ConditionalRoute
          check={ensureTicketDoesntAllowChooseActivities}
          path={`${match.path}/unauthorized`}
          exact
        >
          <UnauthorizedToChoose />
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

function ensureTicketDoesntAllowChooseActivities() {
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
