import { Switch, useRouteMatch } from "react-router-dom";

import ConditionalRoute from "../../../components/Router/ConditionalRoute";

import TicketContext, { TicketProvider } from "../../../contexts/TicketContext";

import UnathourizedToChoose from "../../../components/Activities/UnathourizedToChoose";
import OnlineModalityTicket from "../../../components/Activities/OnlineModalityTicket";
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
          check={ensureTicketIsOnlineModality}
          path={`${match.path}/online`}
          exact
        >
          <OnlineModalityTicket />
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
    { to: "/dashboard/activities/online", check: () => !(ticketData?.isPaid && ticketData?.isOnline) },
    { to: "/dashboard/activities", check: () => !(ticketData?.isPaid && !ticketData?.isOnline) },
  ];
}

function ensureTicketIsOnlineModality() {
  const { ticketData } = useContext(TicketContext);
  return [
    { to: "/dashboard/activities", check: () => !(ticketData?.isPaid && !ticketData?.isOnline) },
    { to: "/dashboard/activities/unauthorized", check: () => !!ticketData?.isPaid }
  ];
}

function ensureTicketIsPresencialModality() {
  const { ticketData } = useContext(TicketContext);
  // eslint-disable-next-line no-console
  console.log(ticketData?.isPaid);

  return [
    { to: "/dashboard/activities/online", check: () => !(ticketData?.isPaid && ticketData?.isOnline) },
    { to: "/dashboard/activities/unauthorized", check: () => !!ticketData?.isPaid }
  ];
}
