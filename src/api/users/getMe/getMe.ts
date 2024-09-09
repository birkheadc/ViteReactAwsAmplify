import { ApiError } from "../../../types/apiResult/apiError";
import { User } from "../../../types/user/user";
import utils from "../../../utils";

const getMe = async (accessToken: string | undefined): Promise<User> => {
  if (accessToken == null) {
    throw ApiError.LOGIN_FAILED;
  }
  const result = await utils.apiFetch({
    path: `me`,
    init: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    builder: async (json) => User.fromJson(json),
  });

  return result;
};

export default getMe;
