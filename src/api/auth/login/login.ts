import { ApiError } from "../../../types/apiResult/apiError";
import utils from "../../../utils";

const login = async (code: string | undefined): Promise<boolean> => {
  if (code == null) {
    throw ApiError.LOGIN_FAILED;
  }

  await utils.apiSubmit({
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
    }
  })

  return true;
};

export default login;
