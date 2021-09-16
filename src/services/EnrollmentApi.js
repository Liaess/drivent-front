import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";
import FormData from "form-data";

export default class EnrollmentApi extends AuthenticatedApi {
  save(body) {
    return api.post("/enrollments", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  getPersonalInformations() {
    return api.get("/enrollments", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  uploadImage(file) {
    let data = new FormData();
    data.append("file", file[0], file[0].name);
    return api.post("/enrollments/image", data, {
      headers: {
        ...this.getAuthorizationHeader(),
        accept: "application/json",
        "Accept-Language": "en-US, en; q=0.8",
        "Content-Type": `multipart/form-data; boundary=${data.boundary}`,
      },
    });
  }
}
