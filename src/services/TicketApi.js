import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class TicketApi extends AuthenticatedApi {
  save(body) {
    return api.post("/payment/confirmation", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  updatePayment(body) {
    return api.put("/payment/confirmation", {
      headers: {
        ...this.getAuthorizationHeader(body),
      },
    });
  }

  getTicketInformation() {
    return api.get("/payment", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}
