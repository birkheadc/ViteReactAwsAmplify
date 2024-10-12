import { ApiError } from "../../../types/apiResult/apiError";
import { User } from "../../../types/user/user";
import utils from "../../../utils";

const login = async (code: string | undefined): Promise<User> => {
  if (code == null) {
    throw ApiError.LOGIN_FAILED;
  }

  const result = await utils.apiFetch({
    path: "session",
    init: {
      method: "POST",
      body: JSON.stringify({
        code,
        redirectUri: `${window.location.protocol}//${window.location.host}/login`,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    },
    builder: User.fromJson
  });
  
  return result;
};

export default login;
