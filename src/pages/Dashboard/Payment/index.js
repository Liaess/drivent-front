import { Switch, Route, useRouteMatch } from "react-router-dom";
import PaymentInformationForm from "../../../components/Payment/PaymentInformationForm";
import PaymentConfirmationForm from "../../../components/Payment/PaymentConfirmationForm";

export default function Payment() {
  const match = useRouteMatch();
  
  //const { ticket } = useApi();

  // ticket
  //   .getTicketInformation()
  //   .then((res) => {
  //     const ticketInfo = res.data;
  //   })
  //   .catch((err) => {
  //     // eslint-disable-next-line no-console
  //     console.log(err);
  //   });

  return (
    <Switch>
      <Route path={`${match.path}`} exact>
        <PaymentInformationForm />
      </Route>
      <Route path={`${match.path}/confirmation`} exact>
        <PaymentConfirmationForm />
      </Route>
    </Switch>
  );
}
