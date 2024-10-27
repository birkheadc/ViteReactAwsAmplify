import register from "./register/register";
import login from "./login/login";
import logout from "./logout/logout";
import { AuthApi } from "../../types/api/api";

const auth: AuthApi = {
  register,
  login,
  logout,
};

export default auth;
