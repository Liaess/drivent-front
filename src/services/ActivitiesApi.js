import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class ActivitiesApi extends AuthenticatedApi {
  getAllDates() {
    return api.get("/activity", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  };

  getActivitiesByDate(body) {
    return api.post("/activity", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  };

  registerUserAtActivity(body) {
    return api.post("/user_activity/register", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  };
}
