import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class HotelApi extends AuthenticatedApi {
  save(body) {
    return api.post("/hotels", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  getHotelsInformation() {
    return api.get("/hotels", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  getRoomInformation() {
    return api.get("/hotels/rooms", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  updateRoomInformation(body) {
    return api.put("/hotels", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}
