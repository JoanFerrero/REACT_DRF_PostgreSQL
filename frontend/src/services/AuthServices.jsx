import api from "./api"

const AuthService = {
  loginUser(data) {
    return api().post("/login", data);
  },
  registerUser(data) {
    return api().post("/register", data);
  },
};

export default AuthService;