import { ApiError } from "../../../types/apiResult/apiError";
import utils from "../../../utils";

const login = async (code: string | undefined): Promise<string> => {
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
    builder: async (json) => {
      if (json == null || typeof json !== "object" || !("value" in json) || typeof json.value !== "string") throw ApiError.UNEXPECTED_FORMAT;
      return json.value;
    }
  });
  
  return result;
};

export default login;
