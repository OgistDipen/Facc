import axios from "axios";
import backendApi from "../helpers/backendApi";

class AuthService {
  login(username, password) {
    return axios
      .post(`${backendApi}/api/auth/login`, {
        username,
        password,
      })
      .then((response) => {
        if (response.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    window.location.href = `/auth/login`;
  }

  me() {
    let auth = this.getCurrentUser();
    let token = auth.access_token;
    return axios.get(`${backendApi}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  register(name, email, password) {
    return axios.post(`${backendApi}/api/auth/register`, {
      name,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
