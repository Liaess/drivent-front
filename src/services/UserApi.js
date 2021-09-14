import api from "./api";

export default class UserApi {
  signUp(email, password) {
    return api.post("/users", { email, password });
  }

  redefine(email) {
    return api.post("/users/redefine", { email });
  }

  newPassword(token, password) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return api.put("/users/redefine", { password }, config);
  }
}
