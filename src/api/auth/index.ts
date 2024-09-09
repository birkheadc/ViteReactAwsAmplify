import register from "./register/register";
import login from "./login/login";
import { AuthApi } from "../../types/api/api";

const auth: AuthApi = {
  register,
  login,
};

export default auth;
