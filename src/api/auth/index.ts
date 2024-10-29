import login from "./login/login";
import logout from "./logout/logout";
import { AuthApi } from "../../types/api/api";

const auth: AuthApi = {
  login,
  logout,
};

export default auth;
